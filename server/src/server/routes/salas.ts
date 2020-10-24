import { Application } from "express";
import pool from "../database";
import { Row } from "../database/dao/genericDao";
import formaSala from "../database/daos/formasala";
import salaDAO from "../database/daos/sala";

export default function salas(app: Application)
{
    app.post("/salas", async (req, res) => {
        let body = req.body;
        let totalseats = body.rows * body.cols - body.corridors.length;
        console.log("sigo")
        let idsala = (await salaDAO.getNextId(pool)).toString();
        console.log("sigo")
        let sala: any = {
            id: idsala, 
            nombresala: body.nombresala,
            rows: body.rows,
            cols: body.cols,
            totalseats
        }
        let formasala: Row[] = [];
        (body.corridors as any[]).forEach(e => {
            formasala.push({
                idsala,
                row: e.row,
                col: e.col
            })    
        });
        try {
            console.log("sigo")
            let ret = await salaDAO.insertOne(sala, pool);
            console.log("sigo")
            let ret2 = await formaSala.insertList(formasala, pool)
            console.log("sigo")
            return res.json({ok: !(ret != "" || ret2 != ""), error: ret + " " + ret2})
        } catch (error) {
            return res.json({ok: false, error})
        }
        
    })
    return app
}