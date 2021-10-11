//导入db.js
const mongoose = require('../db.js');
const Schema = mongoose.Schema;
// 新建Schema对象
const BaiJiuWHSchema = new Schema({
    "古今白酒文化" :Object,
    "节令饮酒":Object,
    "婚嫁饮酒":Object,
    "出师祝捷":Object,
    "酒旗与酒肆":Object,
    _id:String,

})
//使用model 第三个参数为表名 如果第三个参数不设置则默在表名后加s users
const Models = {
    user:mongoose.model('WineCustom',BaiJiuWHSchema,'WineCustom')
};
module.exports = Models;