const neo4j = require('neo4j-driver')
const db = "bolt://127.0.0.1:7687"
const dbuser = "neo4j"
const dbpassword = "123456"
const driver = neo4j.driver(db,neo4j.auth.basic(dbuser,dbpassword),{maxTransactionRetryTime:3000})
// driver.session().run("match(n:poem) return n as name")
//                 .then(result=>{
//                     result.records.forEach(record=>{
//                         console.log(record.get('name').properties.title)
//                     })
//                 })
//                 .catch(error=>{
//                     console.log(error)
//                 })
//                 .then(()=>driver.session().close())
module.exports = driver