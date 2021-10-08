// // 导入mongo包
// const mongoose = require("mongoose");
// // 建立连接 后面跟上数据库地址及库名
// mongoose.connect("mongodb://localhost/WineData", err => {
//     if (err) console.log("**********【数据库连接失败】**********");
//     else console.log("**********【数据库连接成功】**********");
// });
// //导出
// module.exports  = mongoose;
//先引入mongoose模块
let mongoose = require("mongoose");
//连接数据库服务器
mongoose.connect('mongodb://localhost/WineData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (error) {
    if (error) {
        console.log("数据库连接失败")
    } else {
        console.log("数据库连接成功")
    }
});
// //导出
module.exports = mongoose;