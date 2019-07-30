const express = require('express')
const router = express.Router()
const Test = require('../models/test.js')

/**
 * @description: queryWord接口, 根据传入的参数word查询单词, 数量为5个
 * @param {type} 
 * @return: 
 */
router.get('/queryWord', (req, res) => {
    console.log(req)
    Test.test(req.query.word, (err, data) => {
        if (err) {
            return res.send({error: 403, message: '数据库错误'})
        }
        console.log(data)
        res.send(data)
    }) 
})

module.exports = router