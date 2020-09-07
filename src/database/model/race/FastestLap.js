const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const fastestLapSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  driver: {
    type: ObjectId,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  lap: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  team: {
    type: ObjectId,
    required: true,
  },
});

const FastestLap = mongoose.model(
  "fastestLap",
  fastestLapSchema,
  "fastestLaps"
);

module.exports = FastestLap;
