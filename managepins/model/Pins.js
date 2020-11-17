const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const pins = new mongoose.Schema({
  length: {
    type: Number,
    required: true,
  },
  pins: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Pins", pins);
