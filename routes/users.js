var express = require('express');
var crypto = require("crypto")
var router = express.Router();

let mode = require("../models/Users")

//var person = new mode.user
// router.post('/register',function(req,res)
// {
//   let params = req.body;

// })

// router.post('/login',function(req,res)
// {
//   let params = req.body;
//   console.log(params)
// })
// var name = "zhangsan"
// var password = "123456"
// //加密函数
// function encryption(content)
// {
//   let md5 = crypto.createHash('md5');
//   let newPas = md5.update(content).digest("hex");
//   return newPas
// }
// mode.user.create({name:encryption(name),password:encryption(password)},function(err,doc){
//   if(err)
//   {
//     console.log("failed")
//   }
// })
// let appMode = require('../lib/appMode');
// router.post("/add", function (req, res, next) {
//   //插入数据
//   appMode.insertMany([{
//     "name": "panda",
//     "age": 4,
//     "sex": "男",
//     "likes": "吃竹子"
//   }]).then((data) => {
//     console.log('插入成功',data);
//   }).catch((err) => {
//     console.log('插入失败');
//   });
//   res.send("添加成功")
// })
// router.post("/",function (req,res,next) {
//   appMode.searchParams([{
//
//   }])
// })
module.exports = router;