const fs = require ('fs');
const mysql =  require('mysql2');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');  
const db = require("../../models");
const { connect } = require('http2');
const User = db.users;

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
  // Primero, comprobamos si existe una cookie de sesión en la solicitud
  if (req.cookies.session) {
    // Si existe una cookie de sesión, significa que el usuario ha iniciado sesión previamente y
    // que su sesión se ha guardado en una cookie. En este caso, podemos simplemente devolver
    // un código de estado 200 y la información del usuario como respuesta a la solicitud.
    res.status(200).json(req.user);
  } else {
    // Si no existe una cookie de sesión, significa que el usuario no ha iniciado sesión previamente
    // o que su sesión no se ha guardado en una cookie. En este caso, debemos autenticar al usuario
    // utilizando su dirección de correo electrónico y contraseña como normalmente lo haríamos.
    try {
      // Primero, obtenemos la dirección de correo electrónico y la contraseña del cuerpo de la solicitud
      const { email, password } = req.body;

      // Llamamos a la función de inicio de sesión que acabamos de ver
      const user = await login(email, password);
      // Si la autenticación es correcta, podemos guardar la sesión del usuario en una cookie
      // y devolver un código de estado 200 y la información del usuario como respuesta a la solicitud
      res.cookie('session', user.session, { httpOnly: true, signed: true });
      res.redirect('/');
    } catch (error) {
      // Si hay algún error, lo capturamos y devolvemos un código de estado 401 (no autorizado) y el mensaje de error
      res.status(401).json({ message: error.message });
    }
  };
    
};
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
    throw new Error('Contraseña incorrecta');
  }

  // Si llegamos hasta aquí, significa que la dirección de correo electrónico y la contraseña son correctas,
  // por lo que podemos autenticar al usuario y devolver su información
  return user;
};

module.exports = {processLogin,processRegister, createUser,validatorLoginUser_db}