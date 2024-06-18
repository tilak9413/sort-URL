const jwt = require("jsonwebtoken");
const secret = "dslnfkwy95hiorgfm340uyohfb";
function setUser(user) {
  return jwt.sign({
    id:user.id,
    email:user.email
  }, secret);
}

function getUser(token) {
    if(!token) { return null}
    return jwt.verify(token ,secret)
}

module.exports = { setUser, getUser };
