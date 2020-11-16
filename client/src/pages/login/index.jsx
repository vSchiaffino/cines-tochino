import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import FormLogin from '../../components/login'

export default class Login extends Component {

    
    render() {
        return (
            <div className="jumbotron" key="jumbotron">
            <div className="container mt-5 border bg-light-gray rounded">
                <h1 className="display-5 text-primary">Ingresá a tu cuenta</h1>
                <hr></hr>
                <Grid className="media mb-3" container justify="center" alignItems="center" alignContent="center">
                    <Grid  className="container flex-column " item container lg={3} sm={5}  xs={8} md={3} justify="center">
                        <FormLogin/>
                        <a style={{marginLeft:"5%"}}  href="/register">¿Todavía no tenés una cuenta?</a>
                
                    </Grid>
                </Grid>
            </div>
            </div>
        )
    }
}