var express = require('express');
var router = express.Router();
// 导入实列
let modelpoet = require('../models/DrinkingGame');
modelpoet.user.find({},(err,data) =>{
    if(err){
        res.status(500).send()
        return
    } else {
        console.log(data[1]["name"])
        var array = data[0]["children"]
        for(i in array)
        {
            var gameJson = JSON.stringify(array[i])
            console.log(typeof(gameJson))
        }
    }
});


// function fun(object)
// {
//     if())
// }
// router.post('/DrinkingGame',function(req,res){
//     let params = req.body;
//     let param = {};
//     console.log(param);
//     modelpoet.user.find(param,(err,data) =>{
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
