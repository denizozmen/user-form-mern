const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const validations = require("../middleware/validationMiddleware");

router.post("/addUser", validations.userValidation, UserController.addUser);

// router.get("/getUser/:id", UserController.getUser);

router.get("/", UserController.getUsers);

router.delete("/deleteUser/:id", UserController.deleteUser);

module.exports = router;
