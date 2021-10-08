
var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/usersCtrl.js');


router.get('/',userCtrl.index);
router.get('/cart/:id',userCtrl.addToCart);
router.get('/cart', userCtrl.showCart)
router.delete('/cart/:id',userCtrl.delCart)




module.exports = router;
