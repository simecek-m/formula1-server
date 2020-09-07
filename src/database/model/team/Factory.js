const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const factorySchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  country: {
    type: ObjectId,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  team: {
    type: ObjectId,
    required: true,
  },
});

const Factory = mongoose.model("factory", factorySchema);

module.exports = Factory;
