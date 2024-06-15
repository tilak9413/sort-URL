const express = require("express");
const {
  HandleUpdateData,
  seew,
  htmldata,
  patchdata,
} = require("../controller/url");
const url = require("../models/url"); // Correct import
const routes = express.Router();

routes.post("/", HandleUpdateData);
routes.get("/seew", seew);
routes.get("/html", htmldata);
routes.patch("/:id", patchdata);

routes.get("/:urlID", async (req, res) => {
  const shortID = req.params.urlID;
  const entry = await url.findOneAndUpdate(
    { shortID },
    { visitHistory: { timestamp: Date.now() } }
  );
  res.redirect(entry.redirectURL);
});

module.exports = routes;
