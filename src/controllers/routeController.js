
const renderHomeView = (req, res) =>{

    res.render('home')

};
const renderDetailProductView = (req, res) =>{

    res.render('detail-product')

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
    renderDetailProductView,
    renderaboutUsView,
    renderCartView,
    renderLoginView,
    renderRegisterView,
   
};