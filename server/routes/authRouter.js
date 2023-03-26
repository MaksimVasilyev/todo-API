const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');

router.route('/auth/google').get(authController.authGoogle);
router.route('/auth/google/callback').get( authController.authGoogleCallback, function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
res.setHeader("X-Powered-By",' 3.2.1');
res.setHeader("Content-Type", "application/json;charset=utf-8");
    // Successful authentication, redirect to secrets.
    //res.redirect(`/api/user/${req.user._id}`);
    res.status(200).json({ userId: req.user._id });
  })

router.route('/api/register')
.post(authController.authRegister);

router.route('/api/login')
.post(authController.authLogin);


 module.exports = router;