import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import GetReservas from '../../components/reservas'

export default class Reservas extends Component {
    render(){
        return(
            <>
            <div className="jumbotron" key="jumbotron">
            <div className="container mt-5 border bg-light-gray rounded">
                <h1 className="display-5 text-primary">Reservas</h1>
                <hr></hr>
               <Grid className="media mb-3 " >
                    <Grid  className="container flex-column ml-5 " item container lg={7} sm={7}  xs={7} md={7} justify="center">
                        <GetReservas/>
                    </Grid>
                </Grid>
            </div>
            </div>
            </>
        )
    }
}