import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to="/">Cines tochino</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Inicio<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/peliculas">Peliculas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cuenta">Mi cuenta</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/nosotros">Quienes somos</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
