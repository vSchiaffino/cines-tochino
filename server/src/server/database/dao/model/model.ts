import { GenericDAO } from './../genericDao';
import { Pool } from 'mysql';
import { Field } from './field';
import { Row } from '../genericDao'

export class Model{
    name: string
    fields: Field[]
    constructor(name: string, fields: Field[]){
        this.name = name
        this.fields = fields
    }

    updateRow(row: Row, id: number): string {
        let sets: string[] = []
        Object.entries(row).map(e =>{
            let type = this.getFieldByName(e[0])?.type
            if(type === undefined) throw Error(`Field: ${e[0]} invalido.`)
            let val = type.setDbVal(e[1])
            let fld = e[0]

            sets.push(`${fld} = ${val}`)
        })
        let ret = `UPDATE ${this.name} SET ${sets.join(', ')} WHERE id = ${id}`
        console.log(ret)
        return ret
    }

    newRow(row: Row): string{
        let fields: string[] = []
        let values: string[] = []
        Object.entries(row).map(e =>{
            fields.push(e[0])
            let type = this.getFieldByName(e[0])?.type
            if(type === undefined) throw Error(`Field: ${e[0]} invalido.`)
            values.push(type.setDbVal(e[1]))
        })

        return `INSERT INTO ${this.name}(${fields.join(", ")}) VALUES(${values.join(', ')})`
    }
    
    getAll(): string{
        let fields: string[] = this.fields.map((f) => f.name)
        let ret = `SELECT ${fields.join(", ")} FROM ${this.name}`
        console.log(ret)
        return ret
    }
    
    getOneById(id: number): string {
        let ret = `SELECT ${this.fields.map((f) => f.name).join(", ")} FROM ${this.name} WHERE id = ${id}`
        console.log(ret)
        return ret
    }
    
    getByFilter(filter: Row, filterOperator: Row = {}): string {
        let filt: String[] = []
        Object.entries(filter).forEach((e) => {
            let field = this.getFieldByName(e[0])
            if(!field ) throw("Filtro invalido, no existe ese field.")
            let dbVal = field?.setDbVal(e[1])
            let op = filterOperator[e[0]] == undefined ? "=" : filterOperator[e[0]]
            filt.push(`${field?.name} ${op} ${dbVal}`)
        })
        let ret = `SELECT ${this.fields.map((f) => f.name).join(', ')} FROM ${this.name} WHERE ${filt.join(' AND ')}`
        console.log(ret)
        return ret
    }

    async validateRow(row: Row, pool: Pool, dao: GenericDAO) {
        
        for (let i = 0; i < this.fields.length; i++) {
            const f = this.fields[i];
            let res = await f.validate(row[f.name], pool, dao)
            if (row[f.name] != undefined && !res){
                console.log(`mal ${f.name}: ${row[f.name]}`)
                return false
            }
        }
        return true
    }

    getSortedFields(): string[]{
        return this.fields.map(f => f.name)
    }

    private getFieldByName(name: string): Field | undefined{
        for (let i = 0; i < this.fields.length; i++) {
            const f = this.fields[i];
            if(f.name == name) return f
        }
    }
}

