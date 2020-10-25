import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TresPeliculas from './tresPeliculas'

export default class Peliculas extends Component {
    // static propTypes = {
    //     peliculas: PropTypes.arrayOf(PropTypes.object)
    // }

    dividirPeliculas(peliculas) {
        let peliculasEn3 = []
        let tres = []
        let index = 0
        let indexTotal = 0;
        let maxIndex = peliculas.length - 1
        peliculas.forEach(p => {
            if(index == 0) {
                tres = []
            }
            tres.push(p)
            if(index == 2){
                peliculasEn3.push(tres)
                index = 0
                indexTotal++
            }
            else{
               index++
               indexTotal++
            }
            if(maxIndex == indexTotal && index != 2){
                peliculasEn3.push(tres)
            }
        })
        return peliculasEn3
    }

    constructor(props) {
        super(props)
        console.log(this.peliculas);
        this.peliculas = this.dividirPeliculas(this.props.peliculas)
    }

    render() {
        return (
            <>
                {this.peliculas.map(tres => <TresPeliculas tresPeliculas={tres} key={tres.join("-")}/>)}
            </>
        )
    }
}
