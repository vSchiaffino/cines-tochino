const { verifyUser } = require("../checkAuthorization");
const { newUser, loginUser, modUser } = require("../database/users")

module.exports = (server) => {
    server.post('/users', async (req, res) => {
        const ret = await newUser(req.body);
        return res.json({ok: ret ? true : false, user: ret})
    })

    server.post('/users/login', async (req, res) => {
        const ret = await loginUser(req.body);
        return res.json(ret)
    })

    server.put('/users/:id', async (req, res) => {
        if (await verifyUser(req.params.id, req.headers.authorization, res)) {
            const ret = await modUser(req.body, req.params.id);
            return res.json(ret);
        }
    })
    return server
}