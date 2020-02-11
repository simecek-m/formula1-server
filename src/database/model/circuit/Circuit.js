const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const circuitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: ObjectId,
    required: true
  },
  opened: {
    type: Date,
    required: true
  },
  length: {
    type: Number,
    required: true
  }
});

const Circuit = mongoose.model("circuit", circuitSchema);

module.exports = Circuit;
