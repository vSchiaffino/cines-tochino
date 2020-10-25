import { Application } from "express";
import pool from "../database";
import categoriasDAO from "../database/daos/categorias";
import peliculasCategoriasDAO from "../database/daos/peliculas_categorias";

import { checkSUDO, checkUserAndGetId } from "./helpers/authorization";

export default function categorias(app: Application)
{
    app.post("/categorias", async (req, res) => {
        if (checkSUDO(req.headers.authorization || '', res)){
            try {
                await categoriasDAO.insertOne(req.body, pool)
                return res.json({ok: true})
            } catch (error) {
                return res.json({ok: false, error})
            }
        }
    })
    
    app.get("/categorias", async (req, res) => {
        try {
            return res.json({ok: true, categorias: await categoriasDAO.getAll(pool)})
        } catch (error) {
            return res.json({ok: false, error})
        }
    })

    app.post("/peliculascategoria", async (req, res) => {
        if (checkSUDO(req.headers.authorization || '', res)){
            try {
                await peliculasCategoriasDAO.insertOne(req.body, pool)
                return res.json({ok: true})
            } catch (error) {
                return res.json({ok: false, error})
            }
        }
    })
    
    return app
}
