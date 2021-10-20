var express = require('express');
var router = express.Router();
// 导入实列
let modelDrinkingGame = require('../models/DrinkingGame');
// modelDrinkingGame.user.find({}, (err, data) => {
//     if (err) {
//         res.status(500).send()
//         return
//     }
//     var colunm_first = []
//     var colunm_second = [] 
//     var colunm_third = []
//     for(index in data)
//     {

//         colunm_first.push({"name":data[index].name})
//         var children = data[index].children
//         var gameType = []
//         var gameContent = []
//         for(i in children)
//         {
//             if(children[i].children == undefined)
//             {
//                 gameContent.push({"name":children[i].name,"value":children[i].value})
//             }
//             else
//             {
//                 gameType.push({"name":children[i].name})
//                 for(j in children[i].children)
//                 {
//                     gameContent.push({"name":children[i].children[j].name,"value":children[i].children[j].value})
//                 }
//             }
//         }
//         if(gameType.length == 0)
//         {
//             gameType.push({"name":"无具体分类"})
//         }
//         colunm_second.push(gameType)
//         colunm_third.push(gameContent)
//     }
// });


router.post('/DrinkingGame', function (req, res) {
    let params = req.body;
    let param = {};
    console.log(param);
    modelDrinkingGame.user.find({}, (err, data) => {
        if (err) {
            res.status(500).send()
            return
        }
        var colunm_first = []
        var colunm_second = [] 
        var colunm_third = []
        for(index in data)
        {
    
            colunm_first.push({"name":data[index].name})
            var children = data[index].children
            var gameType = []
            var gameContent = []
            for(i in children)
            {
                if(children[i].children == undefined)
                {
                    gameContent.push({"name":children[i].name,"value":children[i].value})
                }
                else
                {
                    gameType.push({"name":children[i].name})
                    for(j in children[i].children)
                    {
                        gameContent.push({"index":i,"name":children[i].children[j].name,"value":children[i].children[j].value})
                    }
                }
            }
            if(gameType.length == 0)
            {
                gameType.push({"name":"无具体分类"})
            }
            colunm_second.push(gameType)
            colunm_third.push(gameContent)
        }
        res.send({
            state: 200,
            msg: '查询成功',
            colunm_first:colunm_first,
            colunm_second:colunm_second,
            colunm_third:colunm_third
        })
    });
});
module.exports = router;
