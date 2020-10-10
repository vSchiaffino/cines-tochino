const {Database, dbTypes, filterOperators} = require('sql-handler')

exports.peliculas = new Database("peliculas", {
    id: dbTypes.NUMBER,
    titulo: dbTypes.STRING,
    sinopsis: dbTypes.STRING,
    estreno: dbTypes.STRING,
    director: dbTypes.STRING
})

exports.funciones = new Database("funciones", {
    id: dbTypes.NUMBER,
    idpelicula: dbTypes.NUMBER,
    idsala: dbTypes.NUMBER,
    seatprice: dbTypes.NUMBER,
    formato: dbTypes.STRING,
    fecha: dbTypes.STRING
})

exports.formaSalaCabecera = new Database("formaSalaCabecera", {
    id: dbTypes.NUMBER,
    rows: dbTypes.NUMBER,
    cols: dbTypes.NUMBER,
    totalSeats: dbTypes.NUMBER
})

exports.sala = new Database("sala", {
    id: dbTypes.NUMBER,
    idFormaSala: dbTypes.NUMBER,
    nombreSala: dbTypes.STRING
})

exports.formaSalaDetalle = new Database("formaSalaDetalle", {
    id: dbTypes.NUMBER,
    idcabecera: dbTypes.NUMBER,
    row: dbTypes.NUMBER,
    col: dbTypes.NUMBER
})

exports.users = new Database("users", {
    id: dbTypes.NUMBER,
    nombre: dbTypes.STRING,
    usuario: dbTypes.STRING,
    contrasena: dbTypes.STRING,
    mail: dbTypes.STRING,
    token: dbTypes.STRING
})

exports.seatsFunciones = new Database("seatsFunciones", {
    id: dbTypes.NUMBER,
    idSeat: dbTypes.NUMBER,
    idfuncion: dbTypes.NUMBER,
    idUsuario: dbTypes.NUMBER
})