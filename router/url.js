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
  try {
    const entry = await url.findOneAndUpdate(
      { shortID },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true } // Return the updated document
    );

    if (!entry) {
      return res.status(404).send("URL not found");
    }

    res.redirect(entry.redirectURL);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

module.exports = routes; // Corrected export statement
