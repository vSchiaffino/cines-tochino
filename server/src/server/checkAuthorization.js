exports.verifyUser = (id, token) => {

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