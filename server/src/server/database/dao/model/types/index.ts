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

    validate(fieldName: string, value: string, pool: Pool, dao: GenericDAO): boolean {
        let ret = super.validate(fieldName, value, pool, dao)
        return !ret ? false : this.length <= value.length
    }

    setDbVal(value: string): string {
        return `'${value}'`
    }
}

export class Hash extends Varchar{
    constructor(nullable = false, pk = false, unique = false){
        super(64, nullable, pk, unique, false)
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