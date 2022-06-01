const {check, body} = require('express-validator');
const users = require('../data/userDataBase.json')

module.exports = [
    check('userName')
        .notEmpty().withMessage('This field is required').bail()
        .isLength({min: 2}).withMessage('The field must contain at least two letters').bail()
        .isAlpha().withMessage('Enter your name...'),

    check('userSurname')
        .notEmpty().withMessage('This field is required').bail()
        .isLength({min: 2}).withMessage('The field must contain at least two letters').bail()
        .isAlpha().withMessage('Enter your name...'),

    check('userEmail')
        .notEmpty().withMessage('This field is required').bail()
        .isEmail().withMessage('Invalid..').bail()
        .custom((value) => {
            const user = users.find(user => user.userEmail === value);
            if(user){
                return false
            }else{
                return true
            }
        }).withMessage('e-mail in use..')

    // check('userPass')
    //     .isLength({min: 2}).withMessage('The field must contain at least two letters').bail()
    //     .isAlpha().withMessage('Enter your password')
        
]
