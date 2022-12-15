'use stric'
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const app = express()
const session = require('express-session');
const cookie = require('cookie-parser');
const db = require("../models");

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.set('view engine', 'ejs');
app.set('views' , __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')));
app.use('/desktop',express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cookie("vamosArgentina"));
app.use(session({
    secret:'123456789',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
    },
    saveUninitialized: true,
    resave: true
}));
app.use(require('./routes/user'));

app.use((req,res,next)=>{
    res.status(400).render('notFound')
})

app.listen(3000,() => console.log('servidor iniciado en el puerto 3000'))

