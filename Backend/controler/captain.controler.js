const captainModal = require('../models/captain.modal')
const captainservices = require('../services/capatin.service')
//const captainservices = require('../services/captain.service')
const { validationResult } = require('express-validator')

module.exports.registerCaptain = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const { fullname, email, password, vehicle } = req.body;

    const iscaptainalreadtthere = await captainModal.findOne({ email });
    if (iscaptainalreadtthere) {
        return res.status(400).json({ message: "Captain already there" });
    }

    const hashedPassword = await captainModal.hashpassword(password);
    const captain = await captainservices.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType   // ✅ match
})

    const token = captain.generateAuthToken();
    // console.log(token,captain)
    res.status(201).json({ token, captain });
}