import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from "@material-ui/core";
import DetallesCompra from '../../components/compra'

 
export default class Compra extends Component {
    static propTypes = {
         prop: PropTypes
    }
    render(){
        return(
            <div className="jumbotron" key="jumbotron">
            <div className="container mt-5 border bg-light-gray rounded">
                <h1 className="display-5 text-primary">Confirmación de compra</h1>
                <hr></hr>
                <Grid className="media mb-3" container justify="center" alignItems="center" alignContent="center">
                    <Grid  className="container flex-column " item container lg={5} sm={8}  xs={10} md={6} justify="center">
                        <DetallesCompra/>
                    </Grid>
                    
                </Grid>
                <hr></hr>
                <Grid className="media mb-3" container justify="center" alignItems="center" alignContent="center">
                    <Grid  className="container flex-column mb-3 " item container lg={5} sm={8}  xs={10} md={6} justify="center">
                            <button className="btn btn-primary rounded shadow" onClick={() => console.log("compré")}> Comprar </button>
                    </Grid>
                </Grid>
            </div>
            </div>
        )
    }
}