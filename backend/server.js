var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cors = require("cors");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors);
app.use(express.static(path.join(__dirname, "public")));

app.post("/signup");
app.post("/signin");

app.get("/api/display_category/:id");
app.get("/api/user/");

export default app;
