import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import PeliculaContent from '../../components/pelicula'
import FiltroFuncionesContent from '../../components/filtrofunciones'

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


    render() {  
        return (
            <div className="container mt-4" >
                <PeliculaContent id={this.id}/>
                <hr/>
                <FiltroFuncionesContent />
                {/* Elegir funciones */}
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
                                            <button class="btn btn-primary rounded">Reservar asientos</button>
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
