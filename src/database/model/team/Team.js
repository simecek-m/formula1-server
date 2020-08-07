const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const teamSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  factory: {
    type: ObjectId,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  seasons: {
    type: Array,
    required: true
  }
});

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
