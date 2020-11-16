import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DetallesCuenta from '../../components/cuenta'

 
export default class Cuenta extends Component {
    static propTypes = {
         prop: PropTypes
     }
 

    render() {
        return (    
                <div className="jumbotron" key="jumbotron">
                    <div className="container mt-5 border bg-light-gray">
                        <h1 className="display-3 text-primary">Cuenta</h1>
                        <hr></hr>
                        <h1 className="display-4 ">Datos</h1>
                        <DetallesCuenta/>
                    </div>      
                </div>
        )
    }
}

