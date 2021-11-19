var express = require("express")
var router = express.Router()

let modelCustom = require("../models/WineCustom")

modelCustom.user.find({},function(err,data)
{
    var strJson = JSON.stringify(data)
    var json = JSON.parse(strJson)
    for(name in json[0])
    {
        console.log(name)
    }
})