const express = require("express");
const signupRouter = require("./router/user");
const connectmongoose = require("./connection/connection");
const staticrouter = require("./router/staticrouter");
const cookieparser = require("cookie-parser");
const redirectuserlogin = require("./middleware/auth")

const path = require("path");
const PORT = 8001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieparser());
app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

// Define static routes first
app.use("/", staticrouter);
app.use("/users",  redirectuserlogin,  signupRouter);

connectmongoose("mongodb://127.0.0.1:27017/emp");

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
