import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import { reducer } from './redux/reducer';

let user = localStorage.getItem("user")
let logged = user !== null;

const initialState = {
  filtroPeliculas: {
    categorias: [],
    actores: [],
    pelicula: 0
  },
  filtroFunciones: {
    formatos: [],
    fecha: '',
    hora: ''
  },
  logged,
  user
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
