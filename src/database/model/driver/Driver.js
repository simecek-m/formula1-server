const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

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
  birthday: {
    type: Date,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  position: {
    type: Number,
    required: true
  },
  photo: String,
  car: ObjectId
});

const Driver = mongoose.model("driver", driverSchema);

module.exports = Driver;
