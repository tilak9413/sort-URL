
const { setUser } = require("../service/auth");
const User = require("../models/user");

async function handledatapost(req, res) {
  const { name, Email, password } = req.body;

  if (!name || !Email || !password) {
    return res.render("signup");
  }
  try {
    await User.create({
      name,
      Email,
      password,
    });

    return res.render("index");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
}

async function handlelogin(req, res) {
  const { Email, password } = req.body;
  const loginuser = await User.findOne({ Email, password });

  if (!loginuser) {
    return res.render("login");
  }

  const token = setUser(loginuser); // Set the logged-in user

  res.cookie("uid", token);
  return res.render("index");
}

module.exports = { handledatapost, handlelogin };
