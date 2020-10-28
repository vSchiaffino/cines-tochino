import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PeliculaContent from '../../components/pelicula'
import FiltroFuncionesContent from '../../components/filtrofunciones'
import FuncionesFiltradasContent from '../../components/funcionesfiltradas'
import { request } from '../../components/helpers/request'

export default class PeliculaDetalle extends Component {
    static propTypes = {
        match: PropTypes.object
    }

    constructor(props) {
        super(props)
        this.state = {funciones: null}
        this.id = this.props.match.params.id
    }

    async componentDidMount() {
        try {
            let data = await request('get', `prefuncion/${this.id}`)
            let funciones = data.data.funciones;
            this.setState({...this.state, funciones})
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            this.state.funciones ?
            <div className="container mt-4" >
                <PeliculaContent id={this.id}/>
                <hr/>
                <FiltroFuncionesContent funciones={this.state.funciones}/>
                <hr/>
                <FuncionesFiltradasContent funciones={this.state.funciones} />
            </div>
            :
            <></>
        )
    }
}
