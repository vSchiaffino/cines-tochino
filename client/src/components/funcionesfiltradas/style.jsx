import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

export default class FuncionesFiltradas extends Component {
    static propTypes = {
        funciones: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        let pClass = "card-text mb-1"
        return (
            <>
                <h3 class="mb-3">Funciones disponibles: </h3>
                <Grid container spacing={4} alignItems='center' alignContent='center' justify="center">
                    {this.props.funciones.map((f) => (
                        <Grid item xs={6} md={4} lg={3}>
                            <div class="card rounded shadow">
                                <div class="card-body">
                                    <p class="card-title h5">Funcion {f.id}</p> <hr/>
                                    <p class={pClass}>Sala: <b>TODO</b></p>
                                    <p class={pClass}>Precio de asiento: <b>${f.seatPrice}</b></p>
                                    <p class={pClass}>formato: <b>{f.formato}</b></p>
                                    <p class={pClass}>Fecha: <b>{f.fecha}</b></p>
                                    <p class={pClass}>hora: <b>{f.hora}</b></p>
                                    <hr/>
                                    <Grid container alignItems='center' alignContent='center'justify="center">
                                        <button class="btn btn-primary rounded">Reservar asientos</button>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </>
        )
    }
}
