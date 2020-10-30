import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Deck from './deck'

export default class Peliculas extends Component {
    static propTypes = {
        peliculas: PropTypes.arrayOf(PropTypes.object)
    }

    dividirPeliculas(peliculas) {
        let peliculasEn3 = []
        while(true) {
            let l = peliculas.length
            if(l >= 3) {
                peliculasEn3.push(peliculas.splice(0, 3))
                if(l === 3) {
                    break
                }
            }
            else{
                peliculasEn3.push(peliculas.splice(0, l))
                break
            }
        }
        return peliculasEn3
    }
    
    render() {
        this.peliculas = this.dividirPeliculas(this.props.peliculas)
        return (
            <>
                {this.peliculas.map(tres => <Deck key={`tp${tres.join(" ")}`} tresPeliculas={tres}/>)}
            </>
        )
    }
}
