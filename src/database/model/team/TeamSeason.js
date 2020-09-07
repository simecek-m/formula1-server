const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const teamSeasonSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  team: {
    type: ObjectId,
    required: true,
  },
  principal: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  races: {
    type: Array,
    required: true,
  },
  car: {
    type: Array,
    required: true,
  },
  drivers: {
    type: Array,
    required: true,
  },
  season: {
    type: ObjectId,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

const teamSeason = mongoose.model(
  "teamSeason",
  teamSeasonSchema,
  "teamSeasons"
);

module.exports = teamSeason;
