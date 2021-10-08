var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/first', function(req, res, next) {
  res.json({name:'aaa',pwd:'123'});
});
// 导入实列
// let modelpoet = require('../models/poet');
// router.post('/poet',function(req,res){
//   let params = req.body;
//   let param = {};
//   console.log(param);
//   modelpoet.user.find(param,(err,data) =>{
//     if(err){
//       res.status(500).send()
//       return
//     } else {
//       res.send({
//         state:200,
//         msg:'查询成功',
//         data:data
//       })
//     }
//   });
// });
module.exports = router;
