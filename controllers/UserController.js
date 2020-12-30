const User = require("../models/User");
const { validationResult, check } = require("express-validator");
const checkError = require("../helper/checkError");

exports.addUser = async (req, res) => {
  try {
    const { firstName, lastName, phone, description } = req.body;

    //fied validation
    const validationErr = validationResult(req);
    checkError(res, validationErr?.errors?.length > 0, validationErr.array());

    //user exist check
    const existUser = await User.findOne({
      firstName: firstName,
      lastName: lastName,
    });
    checkError(res, existUser, "User already exists");

    //save user
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      description: description,
    });

    const addedUser = await user.save({ new: true });
    res.status(200).json(addedUser);
  } catch (err) {
    checkError(res, err, err.message, 500);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({})
      .sort({ createdDate: -1 })
      .where("status", /[^deleted]/);
    res.status(200).json(users);
  } catch (err) {
    checkError(res, err, err.message, 500);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });

    res.status(200).send("Data is deleted");
  } catch (err) {
    checkError(res, err, err.message, 500);
  }
};
