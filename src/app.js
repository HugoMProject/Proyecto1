const path = require("path")
const express = require("express");
const app = express();

app.get('/', (req, res) =>{
    res.send('Estoy en Home')
})

app.get('/aboutUs',  (req, res) =>{
    res.send('Estoy en aboutUs') 
})
app.get('/detail-Product',  (req, res) => {
    res.send('Estoy en detail-Product') 
})
app.get('/login', (req, res) => {
    res.send('Estoy en login') 
});
app.get('/cart', (req, res) => {
    res.send('Estoy en cart') 
});



app.listen(3000,() => console.log('servidor iniciado en el puerto 3000'))

