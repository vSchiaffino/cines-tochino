import { BUSCADOR_ELEGIR_CATEGORIA } from './actions'

export const reducer = (state, action) => {
    if(action.type === BUSCADOR_ELEGIR_CATEGORIA) {
        state = {...state, categoriaElegida: action.value}
    }


    return state
}