import React, { Component } from 'react'
import Home from './components/home'
import Peliculas from './components/peliculas'
import Cuenta from './components/cuenta'
import Nosotros from './components/nosotros'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/nav'

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
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

