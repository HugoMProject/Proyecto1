const fs = require ('fs');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');  
const usuario = require('../../models/users').user;
const db = require("../../models");
const users = db.users;


const processRegister = (req, res,)=>{
    let users_db = fs.readFileSync('src/users.json', 'utf-8');
    let users = JSON.parse(users_db)
    const errors = validationResult(req)
    if(!errors.isEmpty()){
       res.json(errors) 
    }
    const userInDb = users.find(user => user.email === req.body.email);
    if(userInDb) {
                res.send('el correo ya esta registrado ');
            }else {
                const { name,surname,password,email,date } = req.body;
                const passwordHashed = bcrypt.hashSync(password, 10);
                const newUser = {
                    name,
                    surname,
                    password: passwordHashed,
                    email,
                    date
                }
    users.push(newUser);
    let userDb = JSON.stringify(users)
    fs.writeFileSync('src/users.json', userDb, 'utf-8');
    res.redirect('/'); 

    }
}
const processLogin= (req, res,)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      res.json(errors); 
    }
    req.session.email = req.body.email;
    const { email, password } = req.body;
    res.cookie('userData',{email,password},{
        expires: new Date(Date.now() + 900000),
        httpOnly:true
    })
    
    return res.redirect('/'); 

};
const createUser = (req,res) => {
    if (!req.body.name) {
        res.status(400).send({
          message: "Name can not be empty!",
        });
        return;
      }

        // Create a Tutorial
    const tutorial = {
        name: req.body.name,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email,
        date: req.body.date,
    };

     // Save Tutorial in the database
  users.create(tutorial)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial.",
    });
  });
   
}
module.exports = {processRegister,processLogin, createUser}