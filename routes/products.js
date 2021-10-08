var express = require('express');
var express = require('express');
var router = express.Router();
const productsCtrl = require('../controllers/productsCtrl.js')




// router.get('/', function(req, res) {
//     res.send('we are creating a new ordersheet!')
// });

router.get('/',productsCtrl.index);
router.get('/new', productsCtrl.new);
router.get('/:id',productsCtrl.show);
router.post('/',productsCtrl.create);
router.post('/:id/reviews',productsCtrl.addReview);




module.exports = router;
