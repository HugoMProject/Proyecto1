
const {readProducts, readProduct} = require('../models/product')
const product = require('../../models/products');
const getAll = (req, res) => { 
        const AllProducts = readProducts();
        if (AllProducts.length <= 0) {
            res.status(404).json({
            status: 'error',
            message: 'no Product found'
        });
    }
    res.status(200).json(AllProducts); 
};

const getOne = (req, res, next) => {
  
    const { id } = req.params;
    const readOneProduct = readProduct(id);
        if(readOneProduct == undefined){
           return res.status(404).render('notFound')
        }
        else if (readOneProduct.id == id) {
          return res.json(readOneProduct)
        }
        next()

   }


const getProduct_DB = {
    find(req,res){
        return product
        .findOne({
            where: {
                id: req.params.id
            }
        })
        .then(product => res.status(200).send(product))
        .catch(error => res.status(400).send(error))
    }
}
module.exports = {
    getAll,
    getOne,
    getProduct_DB
    
    
}