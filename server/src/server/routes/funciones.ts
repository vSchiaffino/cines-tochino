import daoFunciones from '../database/daos/funciones'
import pool from "../database";
import { showRequest } from './helpers/routeHelper'
import { Application } from 'express'
import { checkSUDO } from './helpers/authorization';
 import { getSala } from './salas'
import reservasDAO from '../database/daos/reservas';
import funcionesDAO from '../database/daos/funciones';

export default function funciones(app: Application)
{
    app.get("/funciones", async (req, res) => {
        showRequest("getFunciones", req)
        return res.json(await daoFunciones.getAllFromView("joinfunciones", pool, ))
    })
    
    app.get("/funciones/:id", async(req, res) => {
        showRequest("getFuncion", req)
        return res.json((await daoFunciones.getOneFromView("joinfunciones", pool, req.params.id)) || {})
    })

    app.post('/funciones', async(req, res) => {
        if(checkSUDO(req.headers.authorization || '', res)){
            showRequest("newFuncion", req)
            return res.json(await daoFunciones.insertOne(req.body, pool))
	    }
    })

    app.put('/funciones/:id', async (req, res) => {
        if (checkSUDO(req.headers.authorization || '', res)) {
            showRequest("newFuncion", req)
            return res.json(await daoFunciones.updateOne(req.body, pool, Number(req.params.id)))
        }
    })

    app.get('/salafuncion/:id', async(req, res) => {
        showRequest("salafuncion", req)
        try {
            let sala = await getSala(Number(req.params.id))
            sala.reservas = await reservasDAO.getByFilter({idfuncion: req.params.id}, pool, ["id", "iduser", "idfuncion"])
            return res.json({ok: true, sala})
        } catch (error) {
            return res.json({ok: false, error})
        }

    })

    app.get('/prefuncion/:idpelicula', async (req, res) => {
        showRequest("getPrefuncion", req)
        try {
            let funciones = await funcionesDAO.getByFilter({idpelicula: req.params.idpelicula}, pool)
            return res.json({ok: true, funciones})
        } catch (error) {
            return res.json({ok: false, error})
        }
    })

    return app
}
