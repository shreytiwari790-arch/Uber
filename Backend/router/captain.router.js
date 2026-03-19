const express = require('express')
const router = express.Router();
const { body } = require('express-validator')
const captaincontroler = require('../controler/captain.controler')
const authMiddleware=require('../middleware/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid message'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6 letter long'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname must be 3 word long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be 3 character long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be 3 character long'),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage('Capacity must be 1 atleast'),
    body('vehicle.vehicleType')
        .isIn(['car', 'motorcycle', 'auto'])
        .withMessage("Vehicle must be there")

],
    captaincontroler.registerCaptain
)

router.post('/login',[
   body('email').isEmail().withMessage('Invalid Email'),
   body('password').isLength({min:6}).withMessage('Password must be 6 character long')
],
captaincontroler.loginCaptain
)

router.get('/profile',authMiddleware.authCaptain,captaincontroler.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain,captaincontroler.getCaptainLogout)

module.exports = router;