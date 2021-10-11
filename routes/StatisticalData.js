var express = require('express');//创建路由对象
var router = express.Router();//将路由和请求路径进行匹配

//导入数据库实例
let modelpoet = require('../models/poet');
let modelpainting = require('../models/painting')
let modelpoetlibai = require('../models/poetlibai')

router.post('/StaticalData', function (err, res) {

    if (err) {
        res.status(500).send()
        return
    }
    //统计数据变量
    StaticalDatas = {}

    var poets
    var paintings
    var poetrys
    var sites
    var age

    //查询数据
    modelpoet.user.distinct("author", function (err, res) {
        if (res) {
            return

        }
        poets = res.length
    })

    modelpoetlibai.user.distinct("place", function (err, res) {
        if (res) {
            return
        }
        sites = res.length
    })

    modelpainting.user.count(function (err, res) {
        if (res) {
            return
        }
        paintings = res
    })

    modelpoet.user.count(function (err, res) {
        if (res) {
            return
        }
        poetrys += res
    })

    modelpoetlibai.user.count(function (err, res) {
        if (res) {
            return
        }
        poetrys += res
    })

    modelpoet.user.distinct("dynasty", function (err, res) {
        if (res) {
            return
        }
        age = res.length
    })

    StaticalDatas =
    {
        "poetrys": poetrys,
        "paintings": paintings,
        "poets": poets + 1,
        "sites": sites,
        "age": age
    }

    res.send(
        {
            state: 200,
            msg: '查询成功',
            data: StaticalDatas
        }
    )

})
