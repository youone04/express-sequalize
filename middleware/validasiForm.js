import { check ,body } from 'express-validator';
export const createUserValidation = () => {
  check('nama', ' Name is required').notEmpty(), 
  check('email', ' Email is required').notEmpty(),
  body('email').isEmail(),body('password').isLength({ min: 3,max: 5 })
}
