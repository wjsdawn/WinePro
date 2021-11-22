var express = require('express')
var router = express.Router()
const {getJson} = require("../models/dynasty_author")
let node,edge;

// const pp = async (ctx,next)=>{
//     await getJson().then(res=>{
//         node = res.node
//         console.log(node)
//     })
// }
// pp()
router.post("/Get_dynasty_author",async (req,res,next)=>{
    await getJson().then((result)=>{
        res.send({
            state:200,
            msg:'查询成功',
            data:result
        })
    }).catch(next);
})
// router.post("/Get_Poem_Author",function (req,res) {
//     var username=req.body.username;//post专用
//     var pwd=req.body.pwd;
//     res.json({name:username,pwd:pwd});//数据返回前端
// })

module.exports = router