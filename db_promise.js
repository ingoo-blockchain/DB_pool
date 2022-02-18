require('dotenv').config()
const mysql = require('mysql2')

const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER || 'ingoo2'
const password = process.env.DB_PASSWORD || 'ingoo2'
const database = process.env.DB_DATABASE || 'rdb'


const config = {host,user,password,database}
const pool = mysql.createPool(config)
const promisePool = pool.promise()
// async function test(){
//     let [result,fields] = await promisePool.execute('select * from user where userid=?',['admin'])
//     console.log(result,fields)
// }
// test()
exports.pool = promisePool