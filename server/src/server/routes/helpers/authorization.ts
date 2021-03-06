import { Response } from "express";
import pool from '../../database'
import usersDAO from "../../database/daos/users";


export function checkSUDO(token: string, res: Response) {
    if(token == process.env.SUDO_KEY) {
        return true
    }
    else {
        res.json({ok: false, error: "No tenes autorizacion para hacer eso."})
        return false
    }
}

export async function checkUser(token: string, userid: number,  res: Response) {
    let u = await usersDAO.getOneById(userid, pool)
    if(u["token"] == token) return true;
    else{
        res.json({ok: false, error: "No tenes autorizacion para hacer eso."})
        return false
    }
}

export async function checkUserAndGetId(token: string, res: Response) {
    console.log(token)
    let u = await usersDAO.getByFilter({token}, pool)
    console.log(u)
    if(u.length == 0) res.json({ok: false, error: "No tenes autorizacion para hacer eso."})
    else{
        return u[0].id
    }
    return null;
}