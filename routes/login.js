var express = require('express')
var crypto = require('crypto') //加密库
var router = express.Router();

var model = require('../models/Users')

router.post('/login',function(req,res)
{
  let par = req.body

  //加密用户信息
  var newPassword = encryption(par.password)
  var newAccount = encryption(par.account)

  //查找用户信息
  model.user.find({name:newAccount},function(err,data){
    if(err)
    {
      console.log("错误："+err)
      return
    }

    //未查询到数据，返回拒绝访问状态码
    if(data.length == 0 )
    {
      res.send({
        state:403,
        msg:'登录失败'
      })
      console.log("登录失败")
      return
    }
    var account = data[0]

    //查询到，返回成功状态码
    if(account.password == newPassword)
    {
        res.send({
          state:200,
          msg:'登录成功'
        })
        console.log("登录成功")
    }
  })
})

//加密函数
function encryption(content)
{
  let md5 = crypto.createHash('md5');
  let newPas = md5.update(content).digest("hex");
  return newPas
}

module.exports = router;