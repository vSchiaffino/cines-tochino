import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Cuenta extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }
constructor(props) {
    super(props)
}
    render() {
        return (
            <> 
            <div className="jumbotron" key="jumbotron">
                <div className="container mt-5">
                    <h1 className="display-3 text-primary">Cuenta</h1>
                    <hr></hr>
                    <h1 className="display-4 ">Datos</h1>
                    <div className="media">

                            <img className="card-img-left rounded-circle"  width="200" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                            <div className="container flex-column ">
                                <h3 className="font-weight-bold col-10"> Nombre: <span className="font-weight-normal"> facundo</span></h3>
                                <h3 className="font-weight-bold col-10"> Usuario: <span className="font-weight-normal"> facuzer</span></h3>
                                <h3 className="font-weight-bold col-10"> Mail: <span className="font-weight-normal"> facundozerbino@gmail.com</span></h3>
                            </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

