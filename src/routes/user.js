
const express = require('express');
const { renderHomeView, renderaboutUsView,  renderTiendaView, renderLoginView, renderCartView, renderRegisterView, renderDetailsProduct} = require('../controllers/routeController');
const registerValidator = require('../middlewares/registerValidator');
const router = express.Router();
const {processLogin, createUser, processRegister, validatorLoginUser_db, validatorAuthLoginUser_db } = require('../controllers/usersController');
const { getAll, createProduct,  getOneProduct, editProduct, deleteProduct, getAll_Json, getOne_Json, deleteAllProduct} = require('../controllers/productController');
const loginValidator = require('../middlewares/login');
const checkCookie = require('../middlewares/checkCookie');
const checkProduct = require('../middlewares/checkProduct');
const verifyToken = require('../middlewares/checkToken')

router.get('/',checkCookie ,renderHomeView);

router.get('/aboutUs', renderaboutUsView); 

router.get('/shop',  renderTiendaView);

router.get('/details-product', renderDetailsProduct);

router.get('/login', renderLoginView);
router.post('/login',loginValidator, processLogin);//  login for json
router.post('/api/login',loginValidator, validatorLoginUser_db);// login for database
router.post('/api/login/auth',loginValidator, validatorAuthLoginUser_db);// login for database

router.get('/register', renderRegisterView);
router.post('/register', registerValidator,processRegister);// create user for json
router.post('/api/register', registerValidator,createUser);// create user for database

router.get('/cart', renderCartView,);
                //api json
router.get('/product',getAll_Json);
        //ruta para las vista de producto del lado del frontend
router.get('/product/:id',checkProduct,getOne_Json);
            //api database
router.get('/api/product',getAll);
router.get('/api/getone/product/:id',checkProduct,getOneProduct);
router.put('/api/update/product/:id',checkProduct,editProduct);
router.delete('/api/delete/product/:id',checkProduct,deleteProduct);
router.delete('/api/deleteAll/product',checkProduct,deleteAllProduct);
router.post('/api/create/product',checkProduct,createProduct);
// ruta para verificar el token 
router.get('/protected-route', verifyToken, (req, res) => {
        // Aquí puedes acceder al ID del usuario a través de req.userId
        res.status(200).send(true);
      });


module.exports = router;