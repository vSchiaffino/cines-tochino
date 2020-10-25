import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Card from './pelicula'

export default class CardDeck extends Component {
    // static propTypes = {
    //     tresPeliculas: PropTypes.arrayOf(PropTypes.object)
    // }

    render() {
        return (
            <div className="card-deck">
                {this.props.tresPeliculas.map(p => (
                    <Card pelicula={p} key={p.id} />
                ))}
            </div>
        )
    }
}
