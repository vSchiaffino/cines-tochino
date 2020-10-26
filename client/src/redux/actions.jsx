export const BUSCADOR_CAMBIO_FILTRO = "BUSCADOR_CAMBIO_FILTRO";

export function elegirFiltro(filtro) {
    return {
        type: BUSCADOR_CAMBIO_FILTRO,
        value: filtro
    }
}