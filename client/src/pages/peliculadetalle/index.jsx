import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Autocomplete } from '@material-ui/lab'
import { MenuItem, TextField } from '@material-ui/core'
import { request } from '../../components/helpers/request'
import { Grid } from '@material-ui/core'
import PeliculaContent from '../../components/pelicula'

export default class index extends Component {
    static propTypes = {
        match: PropTypes.object
    }

    constructor(props) {
        super(props)
        this.id = props.match.params.id
        this.state = {
            pelicula: null,
            funciones: null,
            combos: {formatos: null, fechas: null, horas: null},
            filtrosFunciones: {
                formatos: [],
                fecha: '',
                hora: ''
            },
            funcionesFiltradas: null
        }
    }

    async traerFunciones() {
        try {
            let data = await request('get', `prefuncion/${this.id}`)
            let funciones = data.data.funciones;
            return funciones
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount() {
        let funciones = await this.traerFunciones()
        let combos = this.separarDatosFunciones(funciones)
        this.setState({...this.state, funciones, combos})
    }

    separarDatosFunciones(funciones) {
        let horasYaPuestas = {}
        let fechasYaPuestas = [ ]
        let formatos = []
        let fechas = []
        let horas = {}
        funciones.forEach(f => {
            // Formatos
            let fechavalue = new Date(f.fecha)
            if (!formatos.includes(f.formato)) formatos.push(f.formato)
            // Fechas
            if (!fechasYaPuestas.includes(f.fecha)){
                fechasYaPuestas.push(f.fecha)
                // TODO dia de la semana
                fechas.push({label: fechavalue.toLocaleDateString(), value: fechavalue})
            } 
            // Horarios
            if(!horas.hasOwnProperty(fechavalue)) {
                horas[fechavalue] = []
                horasYaPuestas[fechavalue] = []
            }
            if(!horasYaPuestas[fechavalue].includes(f.hora)){
                horas[fechavalue].push({label: f.hora, value: f.hora})
                horasYaPuestas[fechavalue].push(f.hora)
            }
                
        })
        return {formatos, fechas, horas}
    }

    cambioFiltro(campo, valor) {
        let state = this.state;
        state.filtrosFunciones[campo] = valor
        this.setState(state)
    }

    render() {  
        return (
            <div className="container mt-4" >
                <PeliculaContent id={this.id}/>
                {/* Elegir funciones */}
                <hr/>
                <h3 class="mb-3">Elegí cómo queres ver tu película:</h3>
                <hr/>
                {
                this.state.funciones && 
                <Grid container
                spacing={2}
                alignItems='center'
                alignContent='center'
                justify="center">
                {/* ---------- Inputs ---------- */}
                    <Grid item lg={4} md={4} xs={12} justify='center' alignContent='center' alignItems='center'>
                        <Autocomplete
                        multiple
                        onChange={(e, value) => {this.cambioFiltro("formatos", value)}}
                        options={this.state.combos.formatos}
                        getOptionLabel={(opt) => (opt)}
                        defaultValue={[]}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            
                            className="mb-3 w-100"
                            variant="outlined"
                            label="Formato"
                            placeholder="Elegí el formato (3D, 2D, etc)"
                            />
                        )} />
                    </Grid>
                    <Grid item lg={4} md={4} xs={12} justify='center' alignContent='center' alignItems='center'>
                        {/* Fecha: combo */}
                        <TextField 
                            select
                            label="Fecha"
                            className="mb-3 w-100"
                            value={this.state.filtrosFunciones.fecha}
                            onChange={(e, value) => (this.cambioFiltro("fecha", e.target.value))}
                            // helperText="Selecciona la fecha que quieras"
                            variant="outlined">
                            {this.state.combos.fechas.map(f => (
                                <MenuItem key={f.value} value={f.value}>{f.label}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12} justify='center' alignContent='center' alignItems='center'>
                        <TextField 
                            select
                            className="mb-3 w-100"
                            label="Horario"
                            value={this.state.filtrosFunciones.hora}
                            onChange={(e, value) => (this.cambioFiltro("hora", e.target.value))}
                            // helperText={this.state.filtrosFunciones.fecha ? "Primero selecciona la fecha" : "Selecciona el horario que quieras"}
                            variant="outlined">
                            {
                                this.state.filtrosFunciones.fecha &&
                                this.state.filtrosFunciones.fecha != '' ? 
                                this.state.combos.horas[this.state.filtrosFunciones.fecha].map(h => (
                                    <MenuItem key={h.value} value={h.value}>{h.label}</MenuItem>
                                ))
                                :
                                <></>
                            }
                        </TextField>
                    </Grid>
                    {/* Horario: Combo */}
                </Grid>
                }
                <hr/>
                {/* {
                    this.state.funcionesFiltradas ? 
                    <> */}
                        <h3 class="mb-3">Funciones disponibles: </h3>
                        <Grid   container spacing={0}
                                alignItems='center'
                                alignContent='center'
                                justify="center">
                            <Grid   item
                                    xs={6} md={3} lg={3}>
                                <div class="card rounded shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Funcion 1</h5>
                                        <hr/>
                                        <p class="card-text mb-1">
                                            Sala: <b>1</b>
                                        </p>
                                        <p class="card-text mb-1">
                                            Precio de asiento: <b>$ 50</b>
                                        </p>
                                        <p class="card-text mb-1">
                                            formato: <b>3D</b>
                                        </p>
                                        <p class="card-text mb-1">
                                            Fecha: <b>Lunes 29/02/68</b>
                                        </p>
                                        <p class="card-text mb-1">
                                            hora: <b>18:00:00</b>
                                        </p>
                                        <hr/>
                                        <Grid container alignItems='center'
                                            alignContent='center'
                                            justify="center">
                                            <button role="button" class="btn btn-primary rounded">Reservar asientos</button>
                                        </Grid>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    {/* // </>
                    // :
                    // <></>
                } */}
                {/* Funciones
                <Grid   item
                        lg={lgSize}
                        md={mdSize}
                        smSize={smSize}
                        alignItems='center'
                        alignContent='center'
                        justify='center'>
                    

                </Grid> */}
            </div>
        )
    }
}
