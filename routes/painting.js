var express = require('express');//创建路由对象
var router = express.Router();//将路由和请求路径进行匹配
// 导入实列

var fs= require('fs')
let modelpaint = require('../models/painting');//获取数据库对象
router.post('/painting',function(req,res){
    let params = req.body;
    let param = {};
    modelpaint.user.find(param,(err,data) =>{
        if(err){
            res.status(500).send()
            return
        } else {
            allImgData = []
            for(i in data)
            {
                baseImg = data[i]["Painting"].toString("base64")
                var oneRecord = {
                    "Name":data[i]["Name"],
                    "Painting":baseImg
                }
                allImgData.push(oneRecord)
            }
            res.send({
                state:200,
                msg:'查询成功',
                data:allImgData
            })
        }

    });
});
module.exports = router;