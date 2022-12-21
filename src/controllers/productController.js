
const fs = require('fs');
const {readProducts, readProduct} = require('../services/product');
const db = require("../../models");
const product = db.products;
/* 
   
      CRUD for JSON

*/
// All product
const getAll_Json = (req, res) => { 
  const AllProducts = readProducts();
  if (AllProducts.length <= 0) {
      res.status(404).json({
      status: 'error',
      message: 'no Product found'
  });
};
res.status(200).json(AllProducts); 
};

// Get One Product
const getOne_Json = (req, res, next) => {
  
  const { id } = req.params;
  const readOneProduct = readProduct(id);
      if(readOneProduct == undefined){
         return res.status(404).render('notFound')
      }
      else if (readOneProduct.id == id) {
        return res.json(readOneProduct)
      }
      next()

 };

/* 

    CRUD DataBase

*/
// get all products
const getAll = async (req, res) => { 
    product.findAll()
    .then((AllProducts) => {
        res.json(AllProducts)
    })
    .catch(err => {
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    });
};
//get product by id
const getOneProduct = async (req, res) => {
    product.findByPk(req.params.id)
        .then(AllProducts => {
            if (AllProducts.length <= 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'no Product found'
                });
            }
            return res.send(AllProducts);
        })
        .catch(err => {
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error'
            });
        });
};
//          create product
const createProduct = async (req, res) => {
    if (!req.body.productName) {
        res.status(400).send({
          message: "Name can not be empty!",
        });
        return;
      }
    const { productName,price,description,stock,img } = req.body;
    const newProd = {
        productName,
        price,
        description,
        stock,
        img
    }
    product.create(newProd)
        .then(()=>{res.redirect('/');})
        .catch(err => {
            return res.status(500).json({
                status: 'error',
                message: `Internal Server ${err}`
            });
        });
};


        // update product by id
const editProduct = async (req, res) => {
    const { productName,price,description,stock,img } = req.body;
    const editProd = {
        productName,
        price,
        description,
        stock,
        img
    }
    try {
      const Product = await product.findByPk(req.params.id);
      if (!Product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      const updatedProduct = await Product.update(editProd);
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el producto" });
    }
  };
  // delete product
const deleteProduct = async (req, res) => {
  // Obtenemos el ID del producto a eliminar desde la solicitud
  const productId = req.params.id;
  try {
    // Eliminamos el producto con el ID especificado
    const deletedProduct = await product.destroy({
      where: {
        id: productId
      }
    });
    if (deletedProduct) {
      // Si se eliminó el producto, devolvemos un código HTTP 200 (OK)
      // junto con la información del producto eliminado
      res.status(200).json(deletedProduct);
    } else {
      // Si no se eliminó el producto, es posible que no exista un producto
      // con el ID especificado. En este caso, devolvemos un código HTTP 404
      // (Not Found)
      res.status(404).json({
        message: 'Product not found'
      });
    }
  } catch (error) {
    // Si ocurre un error al intentar eliminar el producto, devolvemos un
    // código HTTP 500 (Internal Server Error) junto con el error
    res.status(500).json({
      message: 'Error deleting product',
      error: error
    });
  }
};
module.exports = {
  getAll_Json,
  getOne_Json,
    getAll,
    getOneProduct,
    editProduct,
    createProduct,
    deleteProduct

    
    
}