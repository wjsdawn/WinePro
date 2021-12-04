var express = require('express');
var router = express.Router();
// 导入实列
let modelInsertAnnotation = require('../models/insertAnnotation');

var totalpage;
const p = function(){
    return new Promise((resolve) => {
        totalpage= modelInsertAnnotation.user.find().count();
        resolve(totalpage)
    })
};
router.post('/insertAnnotation',function(req,res){
    let params = req.body;
    p().then(val=>{
        params["_id"] = val + 1
        console.log(val)
        modelInsertAnnotation.user.create(params).then(()=>{
            res.status(500).send()
        })
   })
    let param = {};
});
module.exports = router;
