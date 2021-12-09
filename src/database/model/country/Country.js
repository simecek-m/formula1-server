const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  factories: {
    type: Array,
    required: true,
  },
  circuits: {
    type: Array,
    required: true,
  },
  flag: String,
  drivers: {
    type: Array,
    required: true,
  },
});

const Country = mongoose.model("country", countrySchema);

module.exports = Country;
