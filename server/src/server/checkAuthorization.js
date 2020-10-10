const pool = require('./database')
const { users } = require('./database/model')

exports.verifyUser = async (id, token, res) => {
    let rows = await pool.query(users.getByFilter({id}))
    let row = rows[0]
    if(rows.length > 0 && row.token == token){
        return true
    }
    res.json({ok: false, error: "You're not authorized to do that."})
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