import { GenericDAO } from './../../genericDao';
import { Pool } from 'mysql';
export class Type{
    nullable: boolean
    pk: boolean
    unique: boolean
    ai: boolean
    constructor(nullable = false, pk = false, unique = false, ai = false){
        this.nullable = nullable
        this.pk = pk
        this.unique = unique
        this.ai = ai
    }

    validate(fieldName: string, value: string | number, pool: Pool, dao: GenericDAO) {
        if(!this.nullable && !this.ai && (value === "" || value === undefined)){
            throw Error(`Se ingreso valor null en el field ${fieldName} que es not nullable.`)
            return false
        }
        if(this.unique) {
            if (dao.existeRecordConFiltros({[fieldName]: value}, pool)) throw Error(`Intentando subir un valor duplicado a ${fieldName} con propiedad unique`)
            return false
        }
        return true
    }

    setDbVal(value: any) : string {
        return typeof(value) == "number" ? value.toString() : `'${value}'` 
    }
}