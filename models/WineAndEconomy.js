//导入db.js
const mongoose = require('../db.js');
const Schema = mongoose.Schema;
// 新建Schema对象
const WineESchema = new Schema({
    Name :String,
    years : Array,
    Events : Array,
    Notes : Array,
    description : Array,
    '2018year':Array,
    '2019year':Array,

})
//使用model 第三个参数为表名 如果第三个参数不设置则默在表名后加s users
const Models = {
    user:mongoose.model('WineAndEconomy',WineESchema,'WineAndEconomy')
};
module.exports = Models;