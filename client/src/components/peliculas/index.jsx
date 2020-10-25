import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Peliculas extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        let peliculas = [
            {
                id: 1,
                titulo: "Card header",
                texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure optio ipsum, rem voluptatem accusantium repellendus itaque impedit at totam minima ullam sunt expedita commodi excepturi laudantium doloremque iusto dolor odio!"
            },
            {
                id: 1,
                titulo: "Card header",
                texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure optio ipsum, rem voluptatem accusantium repellendus itaque impedit at totam minima ullam sunt expedita commodi excepturi laudantium doloremque iusto dolor odio!"
            },
            {
                id: 1,
                titulo: "Card header",
                texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure optio ipsum, rem voluptatem accusantium repellendus itaque impedit at totam minima ullam sunt expedita commodi excepturi laudantium doloremque iusto dolor odio!"
            },
            {
                id: 1,
                titulo: "Card header",
                texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure optio ipsum, rem voluptatem accusantium repellendus itaque impedit at totam minima ullam sunt expedita commodi excepturi laudantium doloremque iusto dolor odio!"
            },
            {
                id: 1,
                titulo: "Card header",
                texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure optio ipsum, rem voluptatem accusantium repellendus itaque impedit at totam minima ullam sunt expedita commodi excepturi laudantium doloremque iusto dolor odio!"
            },
            {
                id: 1,
                titulo: "Card header",
                texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure optio ipsum, rem voluptatem accusantium repellendus itaque impedit at totam minima ullam sunt expedita commodi excepturi laudantium doloremque iusto dolor odio!"
            },
        ]
        let peliculasEn3 = []
        let tres = []
        let index = 0
        peliculas.forEach(p => {
            if(index == 0) {
                tres = []
            }
            tres.push(p)
            if(index == 2){
                peliculasEn3.push(tres)
                index = 0
            }
            else index++
        })
        console.log(peliculasEn3);
        return (
            <div className="container mt-5">
                {peliculasEn3.map(tres => (
                    <div className="card-deck">
                        {tres.map(p => (
                            <div role="button" className="card mb-4 border-secondary" onClick={() => {console.log(p.id)}}>
                                <img className="card-img-top" width="100%" src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/JTY76P5GYVGGFEITZT5NILNCH4.jpg"/>
                                <div className="card-body">
                                    <h3 className="card-title">{p.titulo}</h3>
                                    {/* <p className="card-text">{p.texto}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}
