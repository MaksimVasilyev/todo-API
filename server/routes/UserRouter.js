
const express = require("express");

const router = express.Router();
const userController = require('../controllers/userController');

router.route('/api/user')
 .post(userController.createNewUser);
  
  
router.route('/api/user/:id')
 .get(userController.getAllUserItems)
 .post(userController.createNewItem)
 .delete(userController.deleteItem)
 .patch(userController.updateItem);
  


module.exports = router;