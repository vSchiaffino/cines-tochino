import React, {Component} from 'react';
import { Grid } from '@material-ui/core'
import { request } from '../../components/helpers/request'
import qs from 'qs'


export default class GetReservas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservas:2
        }
    }
    // no sé cómo pedirle todas las reservas
    render(){
        let pClass = "card-text mb-1"
        return(

            this.state.reservas ?
            <><Grid container spacing={4} alignItems='center' alignContent='center' justify="center">
                <Grid item xs={10} md={5} lg={5}>
                    <div class="card rounded shadow">
                        <div class="card-body">
                            <p class="card-title h5">Reserva {1}</p> <hr/>
                            <p class={pClass}>Sala: <b>TODO</b></p>
                            <p class={pClass}>Precio de asiento: <b>$250</b></p>
                            <p class={pClass}>formato: <b>3D</b></p>
                            <p class={pClass}>Fecha: <b>2020-11-18</b></p>
                            <p class={pClass}>hora: <b>18:30</b></p>
                            <hr/>
                        </div>
                    </div>
                </Grid>
        </Grid></>
            :
            <div className="h1 ">Todavía no hiciste ninguna reserva</div>
            )
    }
}