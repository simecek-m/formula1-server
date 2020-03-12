const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const driverSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true
  },
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
  picture: {
    type: String,
    required: true
  },
  car: ObjectId,
  number: {
    type: Number,
    required: true
  },
  links: {
    web: String,
    instagram: String,
    facebook: String
  }
});

const Driver = mongoose.model("driver", driverSchema);

module.exports = Driver;
