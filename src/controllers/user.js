const path = require('path');


const renderHomeView = (req, res) =>{

    res.render('./views/home')

};
const renderDetailProductView = (req, res) =>{

    res.render('./views/detail-product')

};
const renderaboutUsView = (req, res) =>{

    res.render('./views/aboutUs')

};
const renderCartView = (req, res) =>{

    res.render('./views/cart')

};
const renderLoginView = (req, res) =>{

    res.render('./views/login')

};

module.exports = {
    renderHomeView,
    renderDetailProductView,
    renderaboutUsView,
    renderCartView,
    renderLoginView
};