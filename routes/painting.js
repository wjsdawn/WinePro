var express = require('express');//创建路由对象
var router = express.Router();//将路由和请求路径进行匹配
// 导入实列

var fs= require('fs')
let modelpaint = require('../models/painting');//获取数据库对象
modelpaint.user.find({},(err,data) =>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        //console.log(data[0])
        console.log(data[0]["Painting"][0])

        //imgdata = data[0]["Painting"]
        // console.log(typeof(data[0]["Name"]))
    }
});
// router.post('/painting',function(req,res){
//     let params = req.body;
//     let param = {};
//     modelpaint.user.find(param,(err,data) =>{
//         if(err){
//             res.status(500).send()
//             return
//         } else {
//             res.send({
//                 state:200,
//                 msg:'查询成功',
//                 data:data
//             })
//         }
//     });
// });
module.exports = router;