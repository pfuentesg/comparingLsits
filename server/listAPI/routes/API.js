var express = require('express');
var router = express.Router();
const listControllers= require ('../controllers/list')
/* GET home page. */
router.get('/getlist', listControllers.findList);

module.exports = router;