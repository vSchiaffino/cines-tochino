const pool = require("..")
const { users } = require('../model')
const crypto = require('crypto')

exports.newUser = async (user) => {
    // TODO Validaciones 

    // Todo ok
    try {
        const cryptKey = `${process.env.SUDO_KEY}.${user.usuario}.${user.contrasena}.${Date.now()}`
        let rows = await pool.query(users.getNextId())
        user.id = rows[0]["id"];
        user.token = crypto.createHash('sha256')
            .update(cryptKey)
            .digest('base64')
        user.contrasena = crypto.createHash('sha256')
                                .update(user.contrasena)
                                .digest('base64')
        await pool.query(users.addRow(user))
        delete user.contrasena
        return user
    } catch (err) {
        console.log(err)
        return false;
    }
}

exports.loginUser = async (usuario) => {
    // TODO Validaciones
    try {
        let rows = await pool.query(users.getByFilter({usuario: usuario.usuario}))
        if(rows.length == 0)
        {
            return {ok: false, err: 'Credenciales incorrectas'};
        }
        else
        {
            usuario.contrasena = crypto.createHash('sha256')
                                .update(usuario.contrasena)
                                .digest('base64')
            row = rows[0]
            if(row.contrasena == usuario.contrasena)
            {
                return {ok: true, user: rows[0]}
            }
            else
            {
                return {ok: false, err: 'Credenciales incorrectas'};
            }
        }
    } catch (err) {
        console.log(err)
        return {ok: false, err: 'Error interno del servidor.'};
    }
}

exports.modUser = async (usuario, id) => {
    // TODO Validaciones
    
    // ok!
    try {
        usuario.contrasena = crypto.createHash('sha256')
                                    .update(usuario.contrasena)
                                    .digest('base64')
        let rows = await pool.query(users.updateRow(id, usuario))
        let ret = await pool.query(users.getByFilter({id}))
        let user = ret[0]
        delete user.contrasena
        return {ok: true, user}
    } catch (err) {
        console.log(err)
        return {ok: false, err: 'Error interno del servidor.'};
    }
}