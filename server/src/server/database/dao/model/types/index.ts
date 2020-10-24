import { GenericDAO } from './../../genericDao';
import { Pool } from 'mysql';
import { Type } from "./type"
import crypto from 'crypto'
import dateformat from 'dateformat'


export class Varchar extends Type{
    length: number
    constructor(length: number,
        nullable = false, pk = false, unique = false, ai = false){
    
        super(nullable, pk, unique, ai)
        this.length = length
    }

    async validate(fieldName: string, value: string, pool: Pool, dao: GenericDAO): Promise<boolean> {
        let ret = await super.validate(fieldName, value, pool, dao)
        if(!ret) return false;
        if (this.length < value.length){
            throw new Error(`length mal ${this.length} < ${value.length}`)
            return false
        }
        return true
    }

    setDbVal(value: string): string {
        return `'${value}'`
    }
}

export class Hash extends Varchar{
    constructor(nullable = false, pk = false, unique = false){
        super(1000, nullable, pk, unique, false)
    }

    async validate(fieldName: string, value: string, pool: Pool, dao: GenericDAO): Promise<boolean> {
        super.validate(fieldName, value, pool, dao)
        return true
    }

    setDbVal(value: string): string {
        return `'${crypto.createHash('sha256').update(value).digest('base64')}'`
    }
}

export class Int extends Type{
    unsigned: boolean
    constructor(unsigned = true,
        nullable = false, pk = false, unique = false, ai = false){

        super(nullable, pk, unique, ai)
        this.unsigned = unsigned
    }

    setDbVal(value: number): string {
        return `${value}`
    }
}

export class Float extends Int{
    constructor(unsigned = true,
        nullable = false, pk = false, unique = false, ai = false){
        super(unsigned, nullable, pk, unique, ai)
    }
}

export class ID extends Int{
    constructor() {
        super(true, false, true, true, true)
    }
}

export class Date_t extends Type{
    setDbVal(value: Date): string {
        return `'${dateformat(value, 'yyyy-mm-dd')}'`
    }
}

export class Datetime_t extends Type{
    setDbVal(value: Date): string {
        return `'${dateformat(value, 'yyyy-mm-dd HH:MM:ss')}'`
    }
}