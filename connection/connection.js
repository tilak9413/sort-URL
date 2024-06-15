const mongoose = require("mongoose");

async function connectmongoose(url) { 
  return mongoose.connect(url)
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log(err));
}

module.exports = connectmongoose; 
