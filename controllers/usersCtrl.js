
const Product = require('../models/product');
const User = require('../models/user');


module.exports = {
    index,
    addToCart,
    showCart,
    delCart,

}

 function delCart(req,res,next){
   console.log ('req.user',req.user)
   let cart= req.user.cart
   let idx = cart.findIndex(function (item){
       console.log('this is item:'. item)
    item.equals(req.params.id)
    })
    console.log('this is the index',idx)
       //i wasnt to write a splice method and save but the index # logging is always a -1
    
 }


 async function showCart(req,res){
    if (!req.user) {
        return res.redirect('/auth/google')
     }
    console.log( "this is req.user",req.user) 
    let cart = req.user.cart
    console.log('req.user._id :',req.user._id)
    let user = await User.findById(req.user._id)
    console.log('this is user:',user)
    console.log('this is cart:', cart)
     let cartContent = []
   
 for(let item of cart) {
        let product = await Product.findById(item)
        cartContent.push(product)
        console.log(' this is one of the products', product)
    }
    console.log("this is cartContent", cartContent)

    res.render('users/cartShow.ejs',{cartContent: cartContent})

}
async function addToCart(req,res){
    if (!req.user) {
        return res.redirect('/auth/google')
     }
    try{
        console.log('this is req.user',req.user)
        console.log('Req.Params.id : ', req.params.id)
      //do an if statement to promt user to log in
        let user = await User.findById(req.user)
        console.log('this is user: ', user)
        user.cart.push(req.params.id)
        await user.save()
        
        res.redirect('/products');
    }
    catch(err){
        console.log('this is the err:',err)
        res.send('OOOOOPSY ! THERE IS A BUG! go spend an hour figure it out')
    }
    
}







function index(req, res, next){
    console.log('the logged-in user is: ', req.user)
    console.log('This is req.query: ', req.query)
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')}: {};
    let sortKey = req.query.sortKey || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err,users){
        if(err) return next(err);
        res.render('index.ejs',{
            title:'WeSell',       
            user:req.user,
            name:req.query.name,
            sortKey,

           
        })
    })
}