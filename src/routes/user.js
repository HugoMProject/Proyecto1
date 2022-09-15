const express = require('express');
const { renderHomeView, renderaboutUsView, renderDetailProductView, renderLoginView, renderCartView } = require('../controllers/user');
const router = express.Router();


router.get('/', renderHomeView);

router.get('/aboutUs', renderaboutUsView); 

router.get('/detail-Product', renderDetailProductView);

router.get('/login', renderLoginView);

router.get('/cart', renderCartView);






module.exports = router;