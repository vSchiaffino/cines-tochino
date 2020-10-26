import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Autocomplete } from '@material-ui/lab'
import { Menu, MenuItem, TextField } from '@material-ui/core'
import { request } from '../../components/content/helpers/request'
import { Grid } from '@material-ui/core'

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

    async traerPelicula() {
        try{
            let data = await request('get', `peliculas/${this.id}`)
            let pelicula = data.data;
            return pelicula
        }
        catch(error){
            console.log(error);
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
        let pelicula = await this.traerPelicula()
        let funciones = await this.traerFunciones()
        let combos = this.separarDatosFunciones(funciones)
        this.setState({...this.state, pelicula, funciones, combos})
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
        let listClasses = "list-group-item list-group-item-primary text-dark text-light list-group-item-action"
        let mdSize = 10
        let lgSize = 6
        let smSize = 12
        return (
            this.state.pelicula ?
            <div className="container mt-4 " >
                {/* Datos pelicula */}
                <Grid container
                spacing={2}
                alignItems='center'
                alignContent='center'
                justify="center">
                    <Grid   item
                            lg={lgSize}
                            md={mdSize}
                            sm={smSize}
                            alignItems='center'
                            >
                        
                        <img
                        // width="100%"
                        class="img-thumbnail rounded float-left"
                        src={this.state.pelicula.img} />

                    </Grid>
                    <Grid   item
                            lg={lgSize}
                            md={mdSize}
                            smSize={smSize}
                            alignItems='center'
                            alignContent='center'
                            justify='center'>
                            
                        <div className="card rounded bg-light ">
                            <div class="card-body">
                                <h4 class="card-title">Titulo de la pelicula</h4>
                                <p class="card-text sinopsis">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis et nam recusandae iste voluptas dolores quidem perferendis iure vero beatae sit reprehenderit nulla, in amet, omnis provident ratione, dicta quam?</p>
                                <hr/>
                                <p className="card-text">Duracion: 123m</p>
                                <hr/>
                                <p className="card-text">Fecha de estreno: 18-11-2001</p>
                                <hr/>
                                <p className="card-text">Actores: Valentín Schiaffino, Danis Stanizbajer, Angelina Jolie</p>
                                <hr/>
                                <p className="card-text">Director: Valentín Schiaffino</p>
                            </div>
                        </div>

                    </Grid>
                </Grid>
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
            :
            <></>
        )
    }
}
