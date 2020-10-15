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
        return `UPDATE ${this.name} SET ${sets.join(', ')} WHERE id = ${id}`
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
        return `SELECT ${fields.join(", ")} FROM ${this.name}`
    }
    
    getOneById(id: number): string {
        return `SELECT ${this.fields.map((f) => f.name).join(", ")} FROM ${this.name} WHERE id = ${id}`
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
        return `SELECT ${this.fields.map((f) => f.name).join(', ')} FROM ${this.name} WHERE ${filt.join(' AND ')}`
    }

    validateRow(row: Row, pool: Pool, dao: GenericDAO) {
        this.fields.forEach(f => {
        if (row[f.name] != undefined && !f.validate(row[f.name], pool, dao)) return false
        })
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

