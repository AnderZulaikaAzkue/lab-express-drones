const User = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

module.exports.create = (req, res) => {
  res.render("users/new");
};

module.exports.doCreate = (req, res, next) => {
  User.create(req.body)
    .then(() => {
      res.redirect("/login");
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.render("users/new", { errors: err.errors, user: req.body });
      } else {
        next(err);
      }
    });
};

module.exports.login = (req, res) => {
    res.render("users/login");
  };

const sessions = {};

module.exports.doLogin = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((ok) => {
          if (ok) {
            // here we'll use express-session library
            const sessionId = (Math.random() + 1).toString(36).substring(7); // simple random string
            sessions[sessionId] = user.id;

            res.set("Set-Cookie", `sessionid=${sessionId}`);
            res.redirect("/drones");
          }
        })
        .catch(next);
    })
    .catch(next);
};
