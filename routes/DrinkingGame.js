var express = require('express');
var router = express.Router();
// 导入实列
let modelpoet = require('../models/DrinkingGame');
modelpoet.user.find({}, (err, data) => {
    if (err) {
        res.status(500).send()
        return
    } else {
        for (index in data) {
            console.log(data[index]["name"])
            var array = data[index]["children"]
            for (i in array) {
                var gameJson = array[i]
                children = gameJson.children
                //console.log(gameJson.name)
                if (children == undefined) {
                    //TODO
                    //console.log(gameJson.name)
                    //console.log(gameJson.value)
                }
                else {
                    for (j in children) {
                        var gameChildren = children[j]
                        //TODO
                        //console.log(gameChildren.name)
                        //console.log(gameChildren.value)
                    }
                }
            }
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
