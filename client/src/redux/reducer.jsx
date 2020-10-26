import { BUSCADOR_CAMBIO_FILTRO } from './actions'

export const reducer = (state, action) => {
    if(action.type === BUSCADOR_CAMBIO_FILTRO) {
        state = {...state, filtro: action.value}
    }

    return state
}