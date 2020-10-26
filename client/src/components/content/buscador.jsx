import React, { Component } from 'react'
import Buscador from '../style/buscador'
import { request } from './helpers/request'

class BuscadorContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataCategorias: null,
            dataActores: null,
            dataPeliculas: null
        }
        try{
            request("get", "categorias")
                .then(res => {this.setState({...this.state, dataCategorias: res.data.categorias})})
            request("get", "actores")
                .then(res => {this.setState({...this.state, dataActores: res.data.actores})})
            request("get", "peliculas")
                .then(res => {this.setState({...this.state, dataPeliculas: res.data})})
        }catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            this.state.dataActores &&
            this.state.dataCategorias && 
            this.state.dataPeliculas ?
                <Buscador
                    dataCategorias={this.state.dataCategorias}
                    dataActores={this.state.dataActores}
                    dataPeliculas={this.state.dataPeliculas}
                /> 
                :
                <></>
        )
    }
}

export default BuscadorContent