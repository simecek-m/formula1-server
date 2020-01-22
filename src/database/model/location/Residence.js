const mongoose = require("mongoose");

const residenceSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true
  }
});

const Residence = mongoose.model("residence", residenceSchema);

module.exports = Residence;
