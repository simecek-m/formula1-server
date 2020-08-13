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
  height: {
    type: Number,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  country: {
    type: ObjectId,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  links: {
    web: String,
    instagram: String,
    facebook: String
  },
  driverSeasons: {
    type: Array,
    required: true
  }
});

const Driver = mongoose.model("driver", driverSchema);

module.exports = Driver;
