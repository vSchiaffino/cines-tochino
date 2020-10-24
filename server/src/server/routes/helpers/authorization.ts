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