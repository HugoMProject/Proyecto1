const path = require("path")
const express = require("express");
const app = express();

app.get('/inicio', function(solicitud, respuesta){
    respuesta.sendFile(path.join(__dirname ,'views/home.html'))
})

app.get('/nosotros',  function(solicitud, respuesta){
    respuesta.sendFile(path.join(__dirname ,'views/home.html')) 
})
app.get('/tienda',  function(solicitud, respuesta){
    respuesta.sendFile(path.join(__dirname ,'views/detail-Product.html')) 
})
app.get('/login',  function(solicitud, respuesta){
    respuesta.sendFile(path.join(__dirname ,'views/login.html')) 
});
