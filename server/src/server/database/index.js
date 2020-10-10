const { createPool, Pool, Query, QueryFunction } = require('mysql')
const { promisify } = require('util')

let pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'cinestochino',
    multipleStatements: true
})

pool.query = promisify(pool.query)

module.exports = pool;