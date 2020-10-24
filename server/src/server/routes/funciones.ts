import daoFunciones from '../database/daos/funciones'
import pool from "../database";
import { showRequest } from './helpers/routeHelper'
import { Application } from 'express'
import {checkSUDO} from './helpers/authorization';


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

    return app
}
