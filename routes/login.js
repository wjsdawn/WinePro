var express = require('express')
var router = express.Router();

router.post('/login',function(req,res,next){
	res.json({name:'adoctors',pwd:'123'});
});
module.exports = router;