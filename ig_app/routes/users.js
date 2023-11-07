const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const userController = require("../controllers/userControllers");

router.get("/", userController.showRegistrationForm);
router.post("/store", userController.storeData);
router.get("/table", userController.showTables);
router.get('/edit/:id', userController.editUser);
router.post('/update/:id', userController.updateUser);
router.get("/delete/:id", userController.delUser);

module.exports = router;