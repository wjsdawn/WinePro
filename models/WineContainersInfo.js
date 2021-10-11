//导入db.js
const mongoose = require('../db.js');
const Schema = mongoose.Schema;
// 新建Schema对象
const WineContainersInfoSchema = new Schema({
    "名称" :String,
    "属性": String,
})
//使用model 第三个参数为表名 如果第三个参数不设置则默在表名后加s users
const Models = {
    user:mongoose.model('WineContainersInfo',WineContainersInfoSchema,'WineContainersInfo')
};
module.exports = Models;