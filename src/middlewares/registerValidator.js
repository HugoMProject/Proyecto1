


const { body } = require('express-validator')






module.exports= [
    body('name').notEmpty().withMessage('Debes poner el nombre').bail().isLength({ min: 4 }).withMessage('debe ser mayor a 4 caracteres'),
    body('surname').notEmpty().withMessage('Debes colocar el apellido').bail().isLength({ min: 4 }).withMessage('debe ser mayor a 4 caracteres'),
    body('password').notEmpty().withMessage('Debes colocar la password').bail().isLength({min: 5}).withMessage('debe ser mayor a 5 caracteres').isAlphanumeric(),
    body('email').notEmpty().withMessage('Debes poner el email').bail().isEmail().withMessage('Debes poner el email valido'),
    body('date').notEmpty().withMessage('Debes poner una fecha de nacimiento')
]