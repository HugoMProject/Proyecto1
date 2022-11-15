const { body } = require('express-validator');
const bcrypt = require ('bcrypt');
const users = require('../users.json');


module.exports = [
    body('email').notEmpty().withMessage('Debes poner el email').bail().isEmail().trim(),
    body('password').notEmpty().withMessage('Debes colocar la password').bail().trim().isLength({min: 5}).withMessage('debe ser mayor a 5 caracteres')
    .isAlphanumeric().withMessage('contraseña alfanumerica').custom((password,{req,res,next}) =>users.find(user => {
        const {email}= req.body
        if(email == user.email){
            const check = bcrypt.compareSync(password,user.password)
            if( check == false){
                throw new Error('contraseña mala')
            }
            return true
        }
    })),
    
]