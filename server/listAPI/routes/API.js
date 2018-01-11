var express = require('express');
var router = express.Router();
const listControllers= require ('../controllers/list')
/* GET home page. */
router.get('/getlist', listControllers.findList);
router.post('/postlist',listControllers.saveList)
module.exports = router;