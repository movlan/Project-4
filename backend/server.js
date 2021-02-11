const express = require("express");
const path = require("path");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const cors = require("cors");

const usersRouter = require("./routers/users");
const zomatoRouter = require("./routers/api/zomato");

// Load environment variables
require("dotenv").config(/* { path: "../.env" } */);

//load database
require("./config/database");

// Get port variable from env
const port = process.env.PORT || 3001;

// cors add options
var corsOptions = {
  origin: "https://wswe-app.herokuapp.com/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));

app.use(favicon(path.join(__dirname, "../build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "../build")));

// Routers
app.use("/users", usersRouter);
app.use("/api/zomato", zomatoRouter);

// this here serves the React app
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Listen
app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
