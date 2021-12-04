//导入db.js
const mongoose = require('../db.js');
const Schema = mongoose.Schema;
// 新建Schema对象
const poetSchema = new Schema({
    _id: Number,
    theme :String,
    title : String,
    author : String,
    dynasty : String,
    poem : [],
    background:String,
    time:String,
    translate:String,
    explanation:[],
    Annotation:[]
})
//使用model 第三个参数为表名 如果第三个参数不设置则默在表名后加s users
const Models = {
    user:mongoose.model('annotation',poetSchema,'annotation')
};
module.exports = Models;