import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './card'

export default class Deck extends Component {
    static propTypes = {
        tresPeliculas: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        return (
            <div className="card-deck" key={this.props.tresPeliculas.join("-")}>
                {this.props.tresPeliculas.map(p => (
                    <Card pelicula={p} key={p.id}/>
                ))}
            </div>
        )
    }
}
