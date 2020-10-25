import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import Peliculas from '../style/peliculas'

export default class PeliculasContent extends Component {
    constructor(props){
        super(props)
        this.state = {}
        axios({
            method: 'get',
            url: 'http://localhost:3000/peliculas',
            headers: { },
            data : ''
        })
        .then(res => {
            this.setState({...this.state, peliculas: res.data})   
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            this.state.peliculas ? <Peliculas peliculas={this.state.peliculas} /> : <></>
            
        )
    }
}
