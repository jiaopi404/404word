const db = require('./db.js')

function Test() {

} 

Test.test = function(param, callback) {
    let sqlStr = `select id, word, translation from table_word where word like '${param}%' limit 5 offset 0`
    console.log('sql语句为: ' + sqlStr)
    db.query(sqlStr, (err, data) => {
        if (err) return callback(err)
        callback(err, data)
    })
}

module.exports = Test