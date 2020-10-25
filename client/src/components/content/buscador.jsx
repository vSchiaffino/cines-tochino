import React, { Component } from 'react'
import Buscador from '../style/buscador'
import axios from 'axios'

export default class BuscadorContent extends Component {
    constructor(props) {
        super(props)
        this.state = {categorias: null}
        axios({
            method: 'get',
            url: 'http://localhost:3000/categorias',
            headers: { },
            data : ''
        })
        .then(res => {
            console.log(res.data.categorias);
            this.setState({...this.state, categorias: res.data.categorias})   
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            this.state.categorias ? <Buscador categorias={this.state.categorias}/> : <> </>
            
        )
    }
}
