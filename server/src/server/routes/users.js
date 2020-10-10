const { newUser, loginUser } = require("../database/users")

module.exports = (server) => {
    server.post('/users', async (req, res) => {
        const ret = await newUser(req.body);
        return res.json({ok: ret ? true : false, user: ret})
    })

    server.post('/users/login', async (req, res) => {
        const ret = await loginUser(req.body);
        return res.json(ret)
    })

    return server
}