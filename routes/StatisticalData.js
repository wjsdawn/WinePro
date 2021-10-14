var express = require('express');//创建路由对象
var router = express.Router();//将路由和请求路径进行匹配

//导入数据库实例
let modelpoet = require('../models/poet');
let modelpainting = require('../models/painting')
let modelpoetlibai = require('../models/poetlibai')


let alldata = {}
let promiser = []

var p = new Promise((resolve, reject) => {
    modelpoet.user.distinct("author", function (err, res) {
        if (err) {
            return
        }
        alldata["poet"] = res.length
        resolve()
    })
})
var p1 = new Promise((resolve, reject) => {
    modelpoetlibai.user.distinct("place", function (err, res) {
        if (err) {
            return
        }
        alldata["place"] = res.length
        resolve()
    })
})
var p2 = new Promise((resolve, reject) => {
    modelpainting.user.count(function (err, res) {
        if (err) {
            return
        }
        alldata["paintings"] = res
        resolve()
    })
})
var p3 = new Promise((resolve, reject) => {
    modelpoet.user.count(function (err, res) {
        if (err) {
            return
        }
        alldata["poetrys"] = res
        resolve()
    })
})
var p4 = new Promise((resolve, reject) => {
    modelpoetlibai.user.count(function (err, res) {
        if (err) {
            return
        }
        alldata["poetrys"] +=res
        resolve()
    })
})
var p5 = new Promise((resolve, reject) => {
    modelpoet.user.distinct("dynasty", function (err, res) {
        if (err) {
            return
        }
        alldata["age"] =res.length
        resolve()
    })
})


promiser.push(p)
promiser.push(p1)
promiser.push(p2)
promiser.push(p3)
promiser.push(p4)
promiser.push(p5)

//等待所有回调函数执行完成后，发送数据
Promise.all(promiser).then(res => {
    console.log(alldata)
    router.post('/StatisticalData',function(req,resl){
        resl.send(
            {
                state:200,
                msg:'查询成功',
                data:alldata
            }
        )
    })
})


module.exports = router;