const mongoose = require('../db.js');
const Schema = mongoose.Schema;
// 新建Schema对象
const users = new Schema({
    "name" : {type : String,required: true},
    "password" : {type : String,required: true}

})
//使用model 第三个参数为表名 如果第三个参数不设置则默在表名后加s users
const Models = {
    user:mongoose.model('Users',users,'Users')
};
module.exports = Models;