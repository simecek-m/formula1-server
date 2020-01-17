const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  height: Number,
  birthday: String,
  nationality: String,
  points: {
    type: Number,
    required: true
  },
  position: {
    type: Number,
    required: true
  },
  // TODO: nested schemas
  // team: Team,
  // car: Car
  // career: Career,
  photo: String
});

const Driver = mongoose.model("driver", driverSchema);

module.exports = Driver;
