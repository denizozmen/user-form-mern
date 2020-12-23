const express = require("express");

require("dotenv").config();

const dbConnect = require("./models/dbConnect");

const app = express();
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
dbConnect();
