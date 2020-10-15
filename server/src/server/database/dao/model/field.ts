import { GenericDAO } from './../genericDao';
import { Pool } from 'mysql';
import { Type } from './types/type';

export class Field{
    name: string
    type: Type
    constructor(name: string, type: Type){
        this.name = name
        this.type = type
    }

    validate(value: string | number, pool: Pool, dao: GenericDAO): boolean{
        return this.type.validate(this.name, value, pool, dao)
    }

    setDbVal(value: any): string {
        return this.type.setDbVal(value)
    }
}