import React, { Component } from 'react'
import Home from './pages/home'
import Peliculas from './pages/peliculas'
import PeliculaDetalle from './pages/peliculadetalle'
import Cuenta from './pages/cuenta'
import Nosotros from './pages/nosotros'
import Nav from './pages/nav'
import Funcion from './pages/funcion'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/peliculas" component={Peliculas} />
            <Route path="/cuenta" component={Cuenta} />
            <Route path="/nosotros" component={Nosotros} />
            <Route path="/pelicula/:id" component={PeliculaDetalle} /> 
            <Route path="/funcion/:id" component={Funcion} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

