import { GenericDAO } from './../../genericDao';
import { Pool } from 'mysql';
import colors from 'colors'
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

    async validate(fieldName: string, value: string | number, pool: Pool, dao: GenericDAO): Promise<boolean> {
        console.log(`${colors.grey(fieldName)} -> ${colors.green(value?.toString())}`)
        if(!this.nullable && !this.ai && (value === "" || value === undefined)){
            throw Error(`Se ingreso valor null en el field ${fieldName} que es not nullable.`)
            return false
        }
        if(this.unique && value !== undefined) {
            if (await dao.existeRecordConFiltros({[fieldName]: value}, pool)){
                throw Error(`Intentando subir un valor duplicado a ${fieldName} con propiedad unique`)
                return false
            }
        }
        console.log(colors.green("OK!"))
        return true
    }

    setDbVal(value: any) : string {
        return typeof(value) == "number" ? value.toString() : `'${value}'` 
    }
}
