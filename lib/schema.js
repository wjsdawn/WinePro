//引入mongoose.js文件
let mongoose = require("./mongoose.js")
//定义schema
let schema = mongoose.Schema
const blog=new schema({
    //这里是数据库自己创建的属性名：他的属性类型   如：
    'name' : {type : String , require : true},
    'age' : {type : Number , require: true},
    'sex' : {type : String, require : true},
    'likes' : {type : String, require : true}
})
//导出
module.exports = blog;