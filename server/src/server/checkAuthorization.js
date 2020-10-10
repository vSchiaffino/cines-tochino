const pool = require('./database')
const { users } = require('./database/model')

exports.verifyUser = (id, token, res) => {
    let rows = pool.query(users.getByFilter({id}))
    if(rows.length > 0 && rows[0].token == token){
        res.json({ok: false, error: "You're not authorized to do that."})
        return true
    }
    return false
}

exports.verifyAdmin = (sudo_key, res) => {
    if(sudo_key == process.env.SUDO_KEY)
    {
        return true
    }
    else
    {
        res.json({ok: false, error: "Permisos insuficientes."})
        return false
    }
}