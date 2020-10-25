import { Application } from "express";
import pool from "../database";
import reservasDAO from "../database/daos/reservas";
import { checkUserAndGetId } from "./helpers/authorization";

export default function reservas(app: Application)
{
    app.post("/reservas", async (req, res) => {
        let id = await checkUserAndGetId(req.headers.authorization || '', res)
        if (id) {
            try {
                let body = req.body
                let ret = await reservasDAO.insertOne({iduser: id, idfuncion: body.idfuncion, row: body.row, col: body.col}, pool)
                return res.json({ok: ret == "", error: ret})
            } catch (error) {
                return res.json({ok: false, error})
            }
        }
    })
    
    
    return app
}
