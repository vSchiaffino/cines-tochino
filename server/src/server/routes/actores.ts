import { Application } from "express";
import pool from "../database";
import actoresDAO from "../database/daos/actores";

import { checkSUDO, checkUserAndGetId } from "./helpers/authorization";

export default function actores(app: Application)
{
    app.post("/actores", async (req, res) => {
        if (checkSUDO(req.headers.authorization || '', res)){
            try {
                await actoresDAO.insertOne(req.body, pool)
                return res.json({ok: true})
            } catch (error) {
                return res.json({ok: false, error})
            }
        }
    })

    app.get("/actores", async (req, res) => {
        try {
            return res.json({ok: true, actores: await actoresDAO.getAll(pool)})
        } catch (error) {
            return res.json({ok: false, error})
        }
    })
    
    return app
}