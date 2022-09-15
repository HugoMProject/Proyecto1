const path = require("path");
const express = require("express");
const app = express();


app.set('view engine', 'ejs');
app.set('views' , __dirname, '/views');

app.use(require('./routes/user'));

app.listen(3000,() => console.log('servidor iniciado en el puerto 3000'))

