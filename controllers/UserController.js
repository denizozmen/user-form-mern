const User = require("../models/User");
const { validationResult } = require("express-validator");

exports.addUser = async (req, res) => {
  try {
    const { firstName, lastName, phone } = req.body;
  }
};
