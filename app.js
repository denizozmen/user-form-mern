const express = require("express");
const path = require("path");

require("dotenv").config();
const dbConnect = require("./models/dbConnect");
const router = require("./routers/router");

//server
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});

//database connect
dbConnect();

app.use("/", express.static(path.join(__dirname + "/node_modules")));
app.use(express.json());
app.use("/api", router);
