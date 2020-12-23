const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/addUser", validation.userValidation, UserController.addUser);

router.get("/getCategory/:id", UserController.getUser);

router.get("/", UserController.getUsers);

module.exports.router;
