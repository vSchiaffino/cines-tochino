import { Application, Request } from "express";
import { checkSUDO } from "./helpers/authorization";
import pool from "../database";
import peliculasDAO from "../database/daos/peliculas";
import { showRequest } from "./helpers/routeHelper";

export default function peliculas(app: Application)
{
    app.get("/peliculas", async (req, res) => {
        showRequest("getPeliculas", req)
        res.json(await peliculasDAO.getAll(pool))
    })

    app.get("/peliculas/:id", async(req, res) => {
        showRequest("getPelicula", req)

        let ret = await peliculasDAO.getOneById(Number(req.params.id), pool)
        res.json( ret == {} ? {ok: false, error: 'No existe pelicula con ese id.'} : ret)
    })

    app.post("/peliculas", async(req, res) => {
        showRequest("newPeliculas", req)
        if (checkSUDO(req.headers.authorization || "", res)) {
            let ret = await peliculasDAO.insertOne(req.body, pool)
            res.json({ok: ret == "", error: ret})
        }   
    })

    app.put("/peliculas/:id", async(req, res) => {
        showRequest("putPelicula", req)

        if (checkSUDO(req.headers.authorization || "", res)) {
            let ret = await peliculasDAO.updateOne(req.body, pool, Number(req.params.id))
            res.json({ok: ret == "", error: ret})
        }  
    })
    return app
}