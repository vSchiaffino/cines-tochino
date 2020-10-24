import { createPool, Query, QueryFunction, QueryOptions } from "mysql";
import { promisify } from 'util'

var pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'cinestochino',
    multipleStatements: true
})

export default pool
require('./sql')