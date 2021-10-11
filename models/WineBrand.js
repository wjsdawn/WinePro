//导入db.js
const mongoose = require('../db.js');
const Schema = mongoose.Schema;
// 新建Schema对象
const WineBrandSchema = new Schema({
    "酒名" :String,
    "名称由来" : String,
    "起源-背景" : String,
    "史料" : String,
    "起源（前身）": Array,
    "经过":String,
    "成立":String,
    "活跃地点":String,
    "香型":String,
    "原料-水源":String,
    "主要粮原料":String
})
//使用model 第三个参数为表名 如果第三个参数不设置则默在表名后加s users
const Models = {
    user:mongoose.model('WineBrand',WineBrandSchema,'WineBrand')
};
module.exports = Models;