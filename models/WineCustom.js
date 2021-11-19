const mongoose = require('../db.js');
const Schema = mongoose.Schema;
// 新建Schema对象
const paintingSchema = new Schema({
    id : Schema.Types.ObjectId
})
//使用model 第三个参数为表名 如果第三个参数不设置则默在表名后加s users
const Models = {
    user:mongoose.model('WineCustom',paintingSchema,'WineCustom')
};
module.exports = Models;