var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



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