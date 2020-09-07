const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const carSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  drivers: {
    type: Array,
    required: true,
  },
  team: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  season: {
    type: ObjectId,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model("car", carSchema);

module.exports = Car;
