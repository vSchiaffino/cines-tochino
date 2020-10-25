import { Application } from "express";
import pool from "../database";
import { Row } from "../database/dao/genericDao";
import formaSala from "../database/daos/formasala";
import reservasDAO from "../database/daos/reservas";
import salaDAO from "../database/daos/sala";
import { checkSUDO } from "./helpers/authorization";
import { showRequest } from "./helpers/routeHelper";

export function salasRoute(app: Application)
{
    app.post("/salas", async (req, res) => {
        showRequest("newSala", req)
        if (checkSUDO(req.headers.authorization || '', res)){
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
        }
    })
    
    app.delete("/salas/:id", async(req, res) => {
        showRequest("delSala", req)
        if(checkSUDO(req.headers.authorization || '', res)){
            try {
                let err = await salaDAO.deleteById(req.params.id, pool)
                if(err != "") throw new Error(err);
                else{
                    let err2 = await formaSala.deleteByFilter({idsala: req.params.id}, pool)
                    if(err2 != "") throw new Error(err2)
                    else{
                        return res.json({ok: true})
                    }
                }
            } catch (error) {
                return res.json({ok: false, error})
            }
        }
    })
    
    app.get("/salas", async(req, res) => {
        showRequest("getSalas", req)
        if(checkSUDO(req.headers.authorization || '', res)){
            try {
                let salas = await salaDAO.getAll(pool) as any[]
                let formasalas = await formaSala.getAll(pool) as any[]
                llenarFormaSala(salas, formasalas)
                res.json(salas)
            } catch (error) {
                return res.json({ok: false, error})
            }
        }
    })

    app.get("/salas/:id", async(req, res) => {
        showRequest("getSala", req)
        try {
            let sala = await getSala(Number(req.params.id))
            return res.json(sala)
        } catch (error) {
            return res.json({ok: false, error})
        }
    })

    app.put("/salas/:id", async(req, res) => {
        showRequest("putSalas", req)
        // TODO hacer el put de salas
        res.json("Not yet")
    })

    return app
}

export async function getSala(id: number): Promise<any>{
    let sala = await salaDAO.getOneById(Number(id), pool) as any
    let formasala = await formaSala.getByFilter({idsala: id}, pool) as any[]
    llenarFormaSala([sala], formasala)
    return sala
}

function llenarFormaSala(salas: any[], formasalas: any[]){
    salas.forEach(s => s.corridors = [])
    formasalas.forEach(fs => {
        salas.forEach(s => {
            if(s.id == fs.idsala) {
                delete fs.idsala
                delete fs.id
                s.corridors.push(fs)
            }
        })
    })
}