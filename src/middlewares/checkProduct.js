const { readProducts } = require('../services/product')
const checkProduct = (err,req,res,next) => {
    const { id } = req.params;
    const readOneProduct = readProducts(id);
     if(id != readOneProduct.id ){
        res.sendstatus(400).json({
            status: 'error',
            message: 'this product do not exist!!!!!'
        })
    }
    next()
    

};
module.exports = checkProduct; 