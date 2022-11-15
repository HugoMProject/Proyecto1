const fs = require ('fs');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');  
const usuario = require('../../models/users').user;

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
const createUser = () => {
     create : async(req,res)=>{
        try {
            const {name, lastname ,password, email } = req.body

            let user = await usuario.create({name, lastname, password,email});
            res.status(200).send(user);
        } catch (err) {
            res.status(404).send(`${err}`);
        }
    }
}
module.exports = {processRegister,processLogin, createUser}