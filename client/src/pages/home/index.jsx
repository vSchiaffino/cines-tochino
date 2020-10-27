import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {

        return (
            <>
                <div className="jumbotron">
                        <h1 className="display-3">Bienvenido a Cines Tochino!</h1>
                        <p className="lead">Podes create una cuenta o también ver las películas disponibles en cada seccion.</p>
                        <hr className="my-4" />
                        <p></p>
                        <p className="lead">
                            <Link className="btn btn-primary btn-lg" to="/nosotros" role="button">Conoce mas de nosotros</Link>
                        </p>
                </div>
                <div className="container">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="img1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="img2.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="img3.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                
                </div>
            </>
        )
    }
}
