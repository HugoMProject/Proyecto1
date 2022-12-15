const db = require('../../models');
const Products = db.products;
const renderHomeView = (req, res) =>{

    res.render('home')

};
const renderTiendaView = (req, res) => {
    Products.findAll().then( products =>{res.render('tienda', { products : products  })});
    
};
const renderaboutUsView = (req, res) =>{

    res.render('aboutUs')

};
const renderCartView = (req, res) =>{

    res.render('cart')

};
const renderLoginView = (req, res) =>{
    // if (req.signedCookies.session) {
    //     // Si existe una cookie de sesión, significa que el usuario ha iniciado sesión previamente y
    //     // que su sesión se ha guardado en una cookie. En este caso, podemos simplemente devolver
    //     // un código de estado 200 y la información del usuario como respuesta a la solicitud.
    //     const session = req.signedCookies.session;
    //     res.status(200).json(session);
    //   } else {}
          
          res.render('login');
};
const renderDetailsProduct = (req, res) =>{

    res.render('details-product')

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
    renderDetailsProduct
   
};