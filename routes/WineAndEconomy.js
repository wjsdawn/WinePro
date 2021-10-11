var express = require('express');
var router = express.Router();
// 导入实列
let modelpoet = require('../models/WineAndEconomy');
router.post('/WineAndEconomy',function(req,res){
    let params = req.body;
    let param = {};
    console.log(param);
    modelpoet.user.find(param,(err,data) =>{
        if(err){
            res.status(500).send()
            return
        } else {
            res.send({
                state:200,
                msg:'查询成功',
                data:data
            })
        }
    });
});
module.exports = router;
