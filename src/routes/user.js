
const express = require('express');
const { renderHomeView, renderaboutUsView,  renderTiendaView, renderLoginView, renderCartView, renderRegisterView} = require('../controllers/routeController');
const registerValidator = require('../middlewares/registerValidator');
const router = express.Router();
const { processRegister, processLogin, createUser } = require('../controllers/UsersController');
const { getAll, getOne} = require('../controllers/productController');
const loginValidator = require('../middlewares/login');
const checkCookie = require('../middlewares/checkCookie');
const checkProduct = require('../middlewares/checkProduct');

router.get('/',checkCookie ,renderHomeView);

router.get('/aboutUs', renderaboutUsView); 

router.get('/tienda',  renderTiendaView);

router.get('/login', renderLoginView);

router.post('/login',loginValidator, processLogin);

router.get('/register', renderRegisterView);

router.post('/register', registerValidator, processRegister);

router.post('/registers', registerValidator, createUser);

router.get('/cart', renderCartView);

router.get('/product',getAll);

router.get('/product/:id',checkProduct,getOne);


router.get('/api/product/find/id/:id');






module.exports = router;