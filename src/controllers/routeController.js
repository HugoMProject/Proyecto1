const  fs = require('fs');
const renderHomeView = (req, res) =>{

    res.render('home')

};
const renderTiendaView = (req, res) => {
    const products = JSON.parse(fs.readFileSync(__dirname + './../database.json'));
    res.render('tienda', { products })
};
const renderaboutUsView = (req, res) =>{

    res.render('aboutUs')

};
const renderCartView = (req, res) =>{

    res.render('cart')

};
const renderLoginView = (req, res) =>{

    res.render('login')

};
const renderRegisterView = (req, res) =>{

    res.render('register')

}

//falta hacer el init
   
module.exports = {
    renderHomeView,
    renderTiendaView,
    renderaboutUsView,
    renderCartView,
    renderLoginView,
    renderRegisterView,
   
};