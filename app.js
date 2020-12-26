const express = require("express");
const path = require("path");
const cors = require("cors");

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
app.use(cors());

app.use(express.json());
app.use("/api", router);

if (process.env.NODE.ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*"),
    (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    };
}

app.use("/", express.static(path.join(__dirname + "/node_modules")));
