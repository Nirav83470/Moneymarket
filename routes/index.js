var express = require('express');
var router = express.Router();


const { resdata } = require('../controller/registration2');
const { logindata } = require('../controller/login');
const { moneyadd } = require('../controller/addmon'); 



router.post('/login', resdata);
router.get('/userlogin', logindata);
router.post('/addmoney', moneyadd);



module.exports = router;
