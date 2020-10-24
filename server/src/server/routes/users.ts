import { Application } from "express";
import pool from "../database";
import crypto from 'crypto'
import usersDAO from "../database/daos/users";
import { checkUser } from "./helpers/authorization";
import { showRequest } from "./helpers/routeHelper";

export default function users(app: Application)
{
    app.post("/users", async (req, res) => {
        showRequest("postUsers", req)
        req.body["token"] = `${process.env.SUDO_KEY}.${req.body["usuario"]}.${req.body["contrasena"]}.${Date.now()}`
        let ret = await usersDAO.insertOne(req.body, pool)
        res.json({ok: ret == "", error: ret})
    })

    app.post("/users/login", async (req, res) => {
        showRequest("loginUsers", req)
        let ret = {ok: false, error: 'Combinación de usuario y contraseña no encontrada.'}
        let u = await usersDAO.getByFilter({usuario: req.body["usuario"]}, pool)
        if(u.length > 0){
            if(u[0].contrasena == crypto.createHash('sha256').update(req.body["contrasena"]).digest('base64')){
                delete u[0].contrasena;
                return res.json({ok: true, user: u[0]})
            }
        }
        return res.json(ret)
    })
    app.put("/users/:id", async (req, res) => {
        showRequest("putUsers", req)
        if(await checkUser(req.headers.authorization || '', Number(req.params.id), res)){
            return res.json(await usersDAO.updateOne(req.body, pool, Number(req.params.id)))    
        }
    })
    
    
    return app
}
