export const BUSCADOR_CAMBIO_FILTRO = "BUSCADOR_CAMBIO_FILTRO";
export const FUNCIONES_CAMBIO_FILTRO = "FUNCIONES_CAMBIO_FILTRO";

export function elegirFiltroPeliculas(filtro) {
    return {
        type: BUSCADOR_CAMBIO_FILTRO,
        value: filtro
    }
}

export function elegirFiltroFunciones(filtro) {
    return {
        type: FUNCIONES_CAMBIO_FILTRO,
        value: filtro
    }
}