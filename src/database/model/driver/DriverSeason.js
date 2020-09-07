const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const driverSeasonSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  number: {
    type: Number,
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
  teams: {
    type: Array,
    required: true,
  },
  cars: {
    type: Array,
    required: true,
  },
  driver: {
    type: ObjectId,
    required: true,
  },
  races: {
    type: Array,
    required: true,
  },
  season: {
    type: ObjectId,
    required: true,
  },
});

const DriverSeason = mongoose.model(
  "driverSeason",
  driverSeasonSchema,
  "driverSeasons"
);

module.exports = DriverSeason;
