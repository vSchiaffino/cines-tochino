import React, { Component } from 'react'
import Buscador from './style'
import { request } from '../helpers/request'

class BuscadorContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataCategorias: null,
            dataActores: null,
            dataPeliculas: null
        }
    }

    async componentDidMount() {
        try {
            let {data: {categorias: dataCategorias}} = (await request("get", "categorias"))
            let {data: {actores: dataActores}} = await request("get", "actores")
            let {data: dataPeliculas} = await request("get", "peliculas")
            this.setState({...this.state, dataCategorias, dataActores, dataPeliculas})
        } catch (error) {
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