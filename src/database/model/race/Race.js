const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const raceSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  season: {
    type: ObjectId,
    required: true,
  },
  circuit: {
    type: ObjectId,
    required: true,
  },
  laps: {
    type: Number,
    required: true,
  },
  qualifying: {
    type: Array,
    required: true,
  },
  fastestLaps: {
    type: Array,
    required: true,
  },
  results: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Race = mongoose.model("race", raceSchema);

module.exports = Race;
