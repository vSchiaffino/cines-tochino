const {newPelicula, getPeliculas, getPelicula, putPelicula} = require('../database/peliculas')
const { verifyAdmin } = require('../checkAuthorization')

module.exports = (server) => {
    server.post("/peliculas", async (req, res) => {
        if(verifyAdmin(req.headers.authorization, res)) {
            return res.json({ok: await newPelicula(req.body)})
        }
    })

    server.get("/peliculas", async (req, res) => {
        const ret = await getPeliculas()
        return res.json({ok: ret ? true : false, peliculas: ret})
    })

    server.get("/peliculas/:id", async (req, res) => {
        const ret = await getPelicula(req.params.id)
        return res.json({ok: ret ? true : false, pelicula: ret})
    })

    server.put("/peliculas/:id", async (req, res) => {
        if(verifyAdmin(req.headers.authorization, res)) {
            return res.json({ok: await putPelicula(req.params.id, req.body)})
        }
    })
    return server
}