import { Type } from './model/types/type';
import { Model } from './model/model';
import { Query, Pool, createPool } from "mysql"
import { Field } from './model/field';
import { Date_t, ID, Int, Varchar } from './model/types';


export class GenericDAO{
    model: Model
    constructor(model: Model){
        this.model = model
    }

    async deleteByFilter(filter: Row, pool: Pool): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            pool.query(this.model.deleteByFilter(filter), (err, res) => {
                if(err) reject(err)
                else{
                    resolve("")
                }
            })
        })
    }

    async deleteById(id: string, pool: Pool): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            try {
                pool.query(this.model.deleteOneById(id), (err, result) => {
                    if(err) return err;
                    else {
                        resolve("")
                    }
                })
            } catch (error) {
                reject(error)
            }
        })

    }

    async getAll(pool: Pool, deleteFields: string[] = []): Promise<Row[]>{
        // ta ok
        let rows = await this._doQuery(this.model.getAll(), pool)
        rows = this._deleteFields(rows, deleteFields)
        console.log(rows)
        return rows;
    }

    async getAllFromView(viewName: string, pool: Pool, deleteFields: string[] = []){
        return this._deleteFields(await this._doQuery(`SELECT * FROM ${viewName}`, pool), deleteFields)
    }

    async getOneFromView(viewName: string, pool: Pool, id: string,  deleteFields: string[] = []) {
        return this._deleteFields(await this._doQuery(`SELECT * FROM ${viewName} WHERE 1 = 1 AND id = ${id}`, pool), deleteFields)
    }

    async getOneById(id: number, pool: Pool, deleteFields: string[] = []): Promise<Row>{
        let rows = await this._doQuery(this.model.getOneById(id), pool)
        let row = rows[0]
        row = this._deleteFields([row], deleteFields)[0]
        console.log(row)
        return row || {}
    }

    async updateOne(row: Row, pool: Pool, id: number): Promise<string> {
        try {
            // validar
            if (await this.model.validateRow(row, pool, this, true)){
                console.log(this.model.updateRow(row, id))
                await pool.query(this.model.updateRow(row, id))
                return ""
            }
            else{
                return "validacion incorrecta"
            }
        } catch (err) {
            console.log("error")
            return (err as Error).message
        }
    }

    async insertOne(row: Row, pool: Pool): Promise<string> {
        try {
            // validar
            if (await this.model.validateRow(row, pool, this)){
                console.log(this.model.newRow(row))
		        await pool.query(this.model.newRow(row))
                return ""
            }
            return ""
        } catch (err) {
            console.log(err)
            return (err as Error).message
        }
        // ok

    }

    async insertList(rows: Row[], pool: Pool): Promise<string> {
        try {
            let querys: string[] = []
            
            for (let i = 0; i < rows.length; i++) {
                const r = rows[i];
                if (await this.model.validateRow(r, pool, this)) {
                    querys.push(this.model.newRow(r))
                }
            }
            let q = querys.join("; ")
            console.log(`query: ${q}`)
            await this._doQuery(q, pool)
            return ""
        } catch (err) {
            return err
        }
    }

    async getByFilter(filter: Row, pool: Pool, deleteFields: string[] = []): Promise<Row[]>{
        return  this._deleteFields(await this._doQuery(this.model.getByFilter(filter), pool), deleteFields)
    }

    async existeRecordConFiltros(filter: Row, pool: Pool): Promise<boolean>{
        let rows = await this.getByFilter(filter, pool)
        return new Promise<boolean>((resolve, reject) => {
            resolve(rows.length >= 1)
        })
    }

    async getNextId(pool: Pool): Promise<Number> {
        return new Promise<Number>(async (resolve, reject) => {
            let res = await this._doQuery(`SELECT MAX(id) as id FROM ${this.model.name}`, pool);
            // console.log(res[0].id || 1)
            let ret = res[0].id == null ? 1 : Number(res[0].id) + 1;
            resolve(ret)
        })
    }

    private _deleteFields(rows: Row[], deleteFields: string[]): Row[] {
        // Me fijo si deletefields es valido
        let fields = this.model.getSortedFields()
        deleteFields.forEach((df) => {
            if(fields.find(f => f == df) === undefined) throw Error("Ingreso un deleteField inválido")
        })
        rows.forEach(r => deleteFields.forEach(df => delete r[df]))
        return rows
    }

    private async _doQuery(queryText: string, pool: Pool): Promise<Row[]>{
        return new Promise<Row[]>((resolve, reject) => {
            pool.query(queryText, (err, data) => {
                if(err) reject(err)
                else resolve(this._ParseDataPackets(data))
            })
        })
    }

    private _ParseDataPackets(query: Query): Row[]{
        let obj:  {[field: string]: string | number}[] = JSON.parse(JSON.stringify(query))
        return obj
    }
}

export interface Row{
    [field: string]: string | number
}

// let model = new Model("peliculas", [
//     new Field("id", new ID()),
//     new Field("titulo", new Varchar(100)),
//     new Field("sinopsis", new Varchar(700)),
//     new Field("estreno", new Date_t()),
//     new Field("director", new Varchar(100))
// ])

// let dao = new GenericDAO(model)


// let pool = createPool({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'cinestochino'
// })

// let a = async () => {
//     dao.getNextId(pool)
// }

// a()
