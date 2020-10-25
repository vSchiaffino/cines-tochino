export const BUSCADOR_ELEGIR_CATEGORIA = "BUSCADOR_ELEGIR_CATEGORIA";

export function elegirCategoria(idcategoria) {
    return {
        type: BUSCADOR_ELEGIR_CATEGORIA,
        value: idcategoria
    }
}