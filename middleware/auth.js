const getuser = require("../service/auth");

async function redirectuserlogin(req, res, next) {
  const userID = req.cookies.uid;
  if (!userID) {
    return res.redirect("login");
  }

  const user = getuser(userID);
  if (!user) {
    return res.redirect("login");
  }
  req.user = user;
  next();
}
module.exports = redirectuserlogin;
