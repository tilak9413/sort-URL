const express = require("express");
const routeURL = require("./router/url");
const connectmongoose = require("./connection/connection");
const PORT = 8001;
const app = express();

app.use(express.json());
connectmongoose("mongodb://127.0.0.1:27017/emp");

app.use("/users", routeURL);

app.listen(PORT, () => {
  console.log("localhost:8001", PORT);
});
