import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Card extends Component {
    static propTypes = {
        pelicula: PropTypes.object.isRequired
    }

    constructor(props){
        super(props)
        this.state = {clicked: false}
    }

    render() {
        return (
            this.state.clicked ?
            <Redirect to={`/pelicula/${this.props.pelicula.id}`} />
            :
            <div role="button" className="card mb-4"
            onClick={() => this.setState({...this.state, clicked: true})}>
                <img className="card-img-top" alt={`Imagen de la pelicula ${this.props.pelicula.titulo}`} width="100%" src={this.props.pelicula.img} />
                <div className="card-body">
                    <h3 className="card-title">{this.props.pelicula.titulo}</h3>
                    {/* <p className="card-text">{p.texto}</p> */}
                </div>
            </div>
        )
    }
}
