'use strict'

const Pool = require('pg').Pool

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'structure_logicielle',
    user: 'postgres',
    password: 'postgres'
})

// https://node-postgres.com/features/pooling
// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

pool.connect((err, client, done) => {
    if (err) {
        throw err
    }

    client.query('SELECT * FROM nodepg', [], (error, response) => {
        done()
        if (error) {
            console.log(error.stack)
        } else {
            console.log(response)
        }
    })
})

/**
 * Ne pas oublier le support "ecmaVersion": 8
 */
async function shutdown () {
    console.log('calling end')
    await pool.end()
    console.log('pool has drained')
}

shutdown()
