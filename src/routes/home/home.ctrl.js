"use strict";

const output = {
  home: (req, res)  => {
    res.render("home/index");
  },
  result: (req, res) => {
    res.render("home/result")
  }
};

module.exports = {
    output,
};