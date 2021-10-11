//导入db.js
const mongoose = require('../db.js');
const Schema = mongoose.Schema;
// 新建Schema对象
const paintingSchema = new Schema({
    _id:String,
    Name :String,
    Painting: Schema.Types.Buffer
})
//使用model 第三个参数为表名 如果第三个参数不设置则默在表名后加s users
const Models = {
    user:mongoose.model('painting',paintingSchema,'painting')
};
module.exports = Models;