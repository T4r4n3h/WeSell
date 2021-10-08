
const Product = require('../models/product.js')


module.exports = {
    index,
    show,
    new:addProduct,
    create,
    addReview,

    
}
async function addReview(req,res){
    try{
        console.log(`Tara logging req.params.id: ${req.params.id}
        aslo below is console.dir of req.body`)
        console.dir(req.body)
        let product = await Product.findById(req.params.id)
        console.log( "this is product:", product)
        product.reviews.push(req.body)
        await product.save()

        return res.redirect(`/products/${product.id}`)
    }
    catch(err){
        console.log('this is err:',err)
        res.send('OOOPS! There was an error')
    }
    
}





async function index(req, res){
    let allProducts = await Product.find({})
    console.log('This is allProducts Logged: ', allProducts)
    res.render('products/index.ejs',{allProducts: allProducts})
}
async function show(req,res){
    console.log('This is the re.params.id:',req.params.id)
    let myProduct = await Product.findById(req.params.id);
    console.log(`this is myProduct: ${myProduct}`)
    return res.render('products/show.ejs',{myProduct: myProduct})
    
    // res.send('yay')
}

function addProduct(req, res){
    console.log('we ar getting to the product makeing page')
    
    res.render('products/new.ejs')
}

async function create(req, res){
    const newProduct = new Product(req.body);
    console.log('this is the NEW PRODUCT logged:',newProduct);
    console.log('This is REQ.BODY', req.body)
    await Product.create({
        image: req.body.image,
        name: req.body.name,
        desc: req.body.desc,
        qty: req.body.qty,
        price: req.body.price,
    })
   
    res.redirect('/products/new')


}