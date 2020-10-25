import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Card extends Component {
    // static propTypes = {
    //     pelicula: PropTypes.object
    // }

    render() {
        return (
            <div role="button" className="card mb-4 border-secondary " onClick={() => {console.log(this.props.pelicula.id)}}>
                <img className="card-img-top" width="100%" src={this.props.pelicula.img} />
                <div className="card-body">
                    <h3 className="card-title">{this.props.pelicula.titulo}</h3>
                    {/* <p className="card-text">{p.texto}</p> */}
                </div>
            </div>
        )
    }
}
