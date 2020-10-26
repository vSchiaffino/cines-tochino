import React, { Component } from 'react'
import {request} from './helpers/request'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import Peliculas from '../style/peliculas'

class PeliculasContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: null
        }
    }

    async traerPeliculas() {
        return new Promise((resolve, reject) => {
            try {
                request("get", "peliculas")
                    .then(res => {
                        resolve(res.data)
                    })
            } catch (error) {
                reject(error);
            }
        })
    }

    async componentDidMount() {
        this.setState({...this.state, peliculas: await this.traerPeliculas()})
    }

    render() {
        return (
            this.state.peliculas &&
                <Peliculas peliculas={[...this.aplicarFiltro(this.state.peliculas)]} />
        )
    }

    aplicarFiltro = (peliculas) => {
        if( (this.props.filtro.categorias.length > 0) ||
            (this.props.filtro.actores.length > 0) ||
            (this.props.filtro.pelicula > 0) ) {
            // Realmente hay filtro
            
            peliculas = peliculas.filter(p => {
                let actorEstaEnPelicula = false
                let categoriaEstaEnPelicula = false
                p.categorias.forEach(c => {
                    if(this.props.filtro.categorias.includes(c)) categoriaEstaEnPelicula = true;
                })
                p.actores.forEach(a => {
                    if(this.props.filtro.actores.includes(a)) actorEstaEnPelicula = true;
                })
                return  p.id == this.props.filtro.pelicula ||
                actorEstaEnPelicula ||
                categoriaEstaEnPelicula
            })
        }
        return peliculas
    }
}
        

let mapStateToProps = state => ({
    filtro: state.filtro,
})

export default connect(mapStateToProps, null)(PeliculasContent)