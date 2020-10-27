import React, { Component } from 'react'
import Pelicula from './style'
import PropTypes from 'prop-types'
import { request } from '../helpers/request'

export default class PeliculaContent extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired
    }

    constructor(props){
        super(props)
        this.state = {
            pelicula: null
        }
    }

    async componentDidMount() {
        try {
            let {data: pelicula} = await request('get', `peliculas/${this.props.id}`)
            this.setState({...this.state, pelicula})
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            this.state.pelicula ?
                <Pelicula pelicula={this.state.pelicula}/>
            :
            <></>
        )
    }
}

