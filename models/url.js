const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.model("Url", userSchema);
module.exports = Url;
