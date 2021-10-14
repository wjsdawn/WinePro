var express = require('express');
var router = express.Router();
// 导入实列
let modelPicData = require('../models/WinePicData');

router.post("/WineVessel", function (req, res) {
    modelPicData.user.find({}, function (err, data) {
        if (err) {
            res.status(500).send()
            return
        }
        allPicData = []
        for (index in data) {
            picData = {
                "name": data[index].name,
                "shuxing1": data[index].shuxing1,
                "shuxing2": data[index].shuxing2,
                "pic": data[index].pic.toString("base64")
            }
            allPicData.push(picData) 
        }
        res.send(
            {
                state:200,
                msg:'查询成功',
                data:allPicData
            })
    })
})
module.exports = router;
