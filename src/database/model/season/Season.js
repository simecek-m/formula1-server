const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const seasonSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  teams: {
    type: Array,
    required: true
  },
  drivers: {
    type: Array,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  cars: {
    type: Array,
    required: true
  }
});

const Season = mongoose.model("season", seasonSchema);

module.exports = Season;
