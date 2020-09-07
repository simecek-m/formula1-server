const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const qualifyingSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  driver: {
    type: ObjectId,
    required: true,
  },
  q1Time: {
    type: String,
    required: true,
  },
  q2Time: {
    type: String,
    required: true,
  },
  q3Time: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  note: String,
  team: {
    type: ObjectId,
    required: true,
  },
});

const Qualifying = mongoose.model("qualifying", qualifyingSchema, "qualifying");

module.exports = Qualifying;
