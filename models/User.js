const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "created",
  },
  description: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
  },
  deletedDate: {
    type: Date,
  },
});

module.exports = User = mongoose.model("User", schema);
