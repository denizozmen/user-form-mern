const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path')
const app = express();
const dbConnect = require("./models/dbConnect");

app.use(bodyParser.json());
app.use(cors());

require("dotenv").config();

const router = require("./routers/router");

//server

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});

//database connect
dbConnect();


app.use(express.json());
app.use("/api", router);

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

// if (process.env.NODE.ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*"),
//     (req, res) => {
//       res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//     };
// }

// //Çalışan
// app.use("/", express.static(path.join(__dirname + "/node_modules")));
