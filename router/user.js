const express = require("express");
const { handledatapost, handlelogin } = require("../controller/user");
const router = express.Router();

// Serve the signup form
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Serve the login form
router.get("/login", (req, res) => {
  res.render("login");
});

// Handle signup form submission
router.post("/signup", handledatapost);

// Handle login form submission
router.post("/login", handlelogin);

module.exports = router;
