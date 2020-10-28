import { BUSCADOR_CAMBIO_FILTRO, FUNCIONES_CAMBIO_FILTRO } from './actions'

export const reducer = (state, action) => {
    if(action.type === BUSCADOR_CAMBIO_FILTRO) {
        state = {...state, filtroPeliculas: action.value}
    }
    if(action.type === FUNCIONES_CAMBIO_FILTRO) {
        state = {...state, filtroFunciones: action.value}
    }
    return state
}