"use strict";

// 모듈
const express = require("express");
const app = express();
const morgan = require('morgan');

const accessLogStream = require("./src/config/log")

// 라우팅
const home = require("./src/routes/home")

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan(":method :date :url", { stream: accessLogStream}));
app.use("/", home); // use -> 미들 웨어 등록 메서드


module.exports = app;