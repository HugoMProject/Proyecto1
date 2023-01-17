const fs = require ('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');  
const db = require("../../models");
const User = db.users;
require('dotenv').config();

//      controller for json            CREAR USUARIOS PARA EL JSON
const processRegister = (req, res,)=>{
    let users_db = fs.readFileSync('src/users.json', 'utf-8');
    let users = JSON.parse(users_db)
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.json(errors) 
    }
    const userInDb = users.find(user => user.email === req.body.email);
    if(userInDb) {
               return res.send('el correo ya esta registrado ');
            }
            else {
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
     return res.json(errors); 
    }
    req.session.email = req.body.email;
    const { email, password } = req.body;
    res.cookie('userData',{email,password},{
        expires: new Date(Date.now() + 900000),
        httpOnly:true
    })
    
    return res.redirect('/'); 

};

/*
      Controller for database
*/
const createUser = async (req,res) => {
    if (!req.body.email) {
        res.status(400).send({
          message: "Name can not be empty!",
        });
        return;
      }
     //     Create a newUser
      try {
        const { name,surname,password,email,date } = req.body;
        const passwordHashed = bcrypt.hashSync(password, 10);
        const newUser = {
            name,
            lastname: surname,
            password: passwordHashed,
            email,
            date
        }
          const userExists = await User.findOne({where:{email}});
          if(userExists){
              return res.status(400).json({
                  message:"Email already exists"
              });
          }
          // Save newUser  in the database
          const user = await User.create(
              newUser 
              );
          return res.redirect('/login');
      } catch (error) {
          return res.status(500).json({
              message:"Server error",
              error
          });
      }
  };   

const validatorLoginUser_db = async (req,res) => {
    try {
      // Primero, obtenemos la dirección de correo electrónico y la contraseña del cuerpo de la solicitud
      const { email, password } = req.body;

      // Llamamos a la función de inicio de sesión que acabamos de ver
      const user = await login(email, password);
      // Si la autenticación es correcta, podemos guardar la sesión del usuario en una cookie
      // y devolver un código de estado 200 y la información del usuario como respuesta a la solicitud
      res.cookie('session', user.session, {secret:'123holamundo', maxAge: 1000 * 60 * 60 * 24 ,httpOnly: true, signed: true });
      res.redirect('/');
    } catch (error) {
      // Si hay algún error, lo capturamos y devolvemos un código de estado 401 (no autorizado) y el mensaje de error
      res.status(401).json({ message: error.message });
  }};
  

async function login(email, password) {
  // Primero, buscamos al usuario en la base de datos utilizando su dirección de correo electrónico
  const user = await User.findOne({ where: { email: email } });

  // Si el usuario no existe, devolvemos un error
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  // Luego, comparamos la contraseña que el usuario ha proporcionado con la contraseña almacenada en la base de datos
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  // Si la contraseña es incorrecta, devolvemos un error
  if (!isPasswordCorrect) {
    throw new Error('Contraseña incorrecta o Email incorrecto');
  }

  // Si llegamos hasta aquí, significa que la dirección de correo electrónico y la contraseña son correctas,
  // por lo que podemos autenticar al usuario y devolver su información.
  //solo los datos necesarios para poder autenticar
  let userInfo = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
} 
  return userInfo;
};
// autentificar para angular
const validatorAuthLoginUser_db = async (req,res) => {
  try {
    // Primero, obtenemos la dirección de correo electrónico y la contraseña del cuerpo de la solicitud
    const { email, password } = req.body;

    // Llamamos a la función de inicio de sesión que acabamos de ver
    const user = await loginAngular(email, password);
    
    // Si la autenticación es correcta, podemos guardar la sesión del usuario en una cookie
    // y devolver un código de estado 200 y la información del usuario como respuesta a la solicitud
    res.cookie('session', user.session, {secret:'123holamundo', maxAge: 1000 * 60 * 60 * 24 ,httpOnly: true, signed: true });
    res.status(200).send(user);
  } catch (error) {
    // Si hay algún error, lo capturamos y devolvemos un código de estado 401 (no autorizado) y el mensaje de error
    res.status(401).json({ message: error.message });
  }
  
};
async function loginAngular(email, password) {
  // Primero, buscamos al usuario en la base de datos utilizando su dirección de correo electrónico
  const user = await User.findOne({ where: { email: email } });

  // Si el usuario no existe, devolvemos un error
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  // Luego, comparamos la contraseña que el usuario ha proporcionado con la contraseña almacenada en la base de datos
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  // Si la contraseña es incorrecta, devolvemos un error
  if (!isPasswordCorrect) {
    throw new Error('Contraseña incorrecta o Email incorrecto');
  }
  
  // Si llegamos hasta aquí, significa que la dirección de correo electrónico y la contraseña son correctas,
  //guardamos los datos en una variable para enviar un token.
  const userForToken = {
    id : user.id,
    email : user.email
  }

  const token = jwt.sign(userForToken, process.env.SECRET)
  console.log(process.env.SECRET)
  // por lo que podemos autenticar al usuario y devolver su información.
  //solo los datos necesarios para poder autenticar
  let userInfo = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    token  
  }
    
  return userInfo;
};

module.exports = {processLogin,processRegister, createUser,validatorLoginUser_db,validatorAuthLoginUser_db}