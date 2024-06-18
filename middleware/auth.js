const { getUser } = require("../service/auth");

async function redirectuserlogin(req, res, next) {
  const userID = req.cookies.uid;

  if (!userID) {
    return res.redirect("/users/login");
  }

  const user = getUser(userID);
  if (!user) {
    return res.redirect("/users/login");
  }

  req.user = user;
  next();
}

module.exports = redirectuserlogin;
