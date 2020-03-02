const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  team: ObjectId,
  drivers: Array,
  fuel: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  picture: {
    type: String,
    required: true
  }
});

const Car = mongoose.model("car", carSchema);

module.exports = Car;
