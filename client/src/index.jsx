import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import { request } from './components/content/helpers/request';
import { reducer } from './redux/reducer';


const initialState = {
  filtro: {
    categorias: [],
    actores: [],
    pelicula: 0
  }
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
