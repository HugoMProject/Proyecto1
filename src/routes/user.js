
const express = require('express');
const { renderHomeView, renderaboutUsView,  renderTiendaView, renderLoginView, renderCartView, renderRegisterView, renderDetailsProduct} = require('../controllers/routeController');
const registerValidator = require('../middlewares/registerValidator');
const router = express.Router();
const {processLogin, createUser, processRegister, validatorLoginUser_db } = require('../controllers/UsersController');
const { getAll, createProduct,  getOneProduct, editProduct, deleteProduct, getAll_Json, getOne_Json} = require('../controllers/productController');
const loginValidator = require('../middlewares/login');
const checkCookie = require('../middlewares/checkCookie');
const checkProduct = require('../middlewares/checkProduct');

router.get('/',checkCookie ,renderHomeView);

router.get('/aboutUs', renderaboutUsView); 

router.get('/tienda',  renderTiendaView);

router.get('/details-product',  renderDetailsProduct);

router.get('/login', renderLoginView);
router.post('/login',loginValidator, processLogin);//  login for json
router.post('/api/login',loginValidator, validatorLoginUser_db);// login for database

router.get('/register', renderRegisterView);
router.post('/register', registerValidator,processRegister);// create user for json
router.post('/api/register', registerValidator,createUser);// create user for database

router.get('/cart', renderCartView);
                //api json
router.get('/product',getAll_Json);
router.get('/product/:id',checkProduct,getOne_Json);
            //api database
router.get('/api/product',getAll);
router.get('/api/getone/product/:id',checkProduct,getOneProduct);
router.put('/api/update/product/:id',checkProduct,editProduct);
router.delete('/api/delete/product/:id',checkProduct,deleteProduct);
router.post('/api/create/product',checkProduct,createProduct);






module.exports = router;