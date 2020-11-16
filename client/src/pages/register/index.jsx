import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import FormRegister from '../../components/register'

export default class Register extends Component {
    render() {
        return (
            <div className="jumbotron" key="jumbotron">
            <div className="container mt-5 border bg-light-gray rounded">
                <h1 className="display-5 text-primary">Ingresá a tu cuenta</h1>
                <hr></hr>
               <Grid className="media mb-3" >
                    <Grid  className="container flex-column ml-5 " item container lg={7} sm={7}  xs={7} md={7} justify="center">
                        <FormRegister/>
                    </Grid>
                    <Grid  item lg={16} sm={16} xs={16} md={16}>
                        <img className="card-img-right "  width="300" src="https://www.tuconcierto.net/wp-content/uploads/2019/09/Alt-Main-Face-1Sht-Joker_master-rev-1.jpg" />
                    </Grid>
                </Grid>
            </div>
            </div>
        )
    }
}