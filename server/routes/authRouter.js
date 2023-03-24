const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');



router.route('/api/register')
.post(authController.authRegister);

router.route('/api/login')
.post(authController.authLogin);


 module.exports = router;