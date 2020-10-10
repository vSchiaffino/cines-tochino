const { peliculas: peliculasModel, peliculas } = require('../model')
const pool = require('../')

exports.newPelicula = async (pelicula) => {
    // Validaciones

    // ok!
    try
    {
        // yyyy-mm-dd
        await pool.query(peliculas.addRow(pelicula))
        return true
    }
    catch(err)
    {
        console.log(err)
        return false
    }
}

exports.getPeliculas = async () => {
    try
    {
        return await pool.query(peliculas.getAll());
    }
    catch(err)
    {
        console.log(err)
        return false;
    }
}

exports.getPelicula = async (id) => {
    try {
        let rows = await pool.query(peliculas.getByFilter({id}));
        return rows.length == 0 ? false : rows[0]
    } catch (err) {
        return false;
    }
}

exports.putPelicula = async (id, pelicula) =>{
    // Validaciones

    // ok!
    try
    {
        await pool.query(peliculas.updateRow(id, pelicula))
        return true
    }
    catch(err)
    {
        console.log(err)
        return false
    }
}