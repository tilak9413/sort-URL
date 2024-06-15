const shortid = require("shortid");
const url = require("../models/url");

async function HandleUpdateData(req, res) {
  const { redirectURL } = req.body;
  const shortesID = shortid.generate();
  if (!redirectURL) {
    res.status(400).json({ mgs: "error", err: "URL is required" });
  }
  await url.create({
    shortID: shortesID,
    redirectURL: redirectURL,
    visitHistory: [],
  });

  res.json({ id: shortesID });
}

async function seew(req, res) {
  const data = await url.find({});
  return res.json({ data });
}

async function htmldata(req, res) {
  const data = await url.find({});
  console.log(data);
  if (!data) {
    res.json({ mgs: "pending" });
  }

  const html = `<ul> ${data.map(
    (data) => `<li> ${data.redirectURL}  </li>`
  )}   </ul>`;

  res.send(html);
}

async function patchdata(req, res) {
  const id = await url.findByIdAndUpdate(req.params.id, {
    redirectURL: "kumartilak2948@gmail.com",
  });
  return res.json({ status: "success" });
}

module.exports = {
  HandleUpdateData,
  seew,
  htmldata,
  patchdata,
};
