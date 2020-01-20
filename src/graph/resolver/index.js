const mongoose = require("mongoose");
const Driver = require("@database/model/driver/Driver");
const Team = require("@database/model/team/Team");
const ObjectId = mongoose.Types.ObjectId;

const resolvers = {
  Query: {
    teams: () => Team.find(),
    drivers: () => Driver.find()
  },
  Team: {
    drivers: ({ _id }) => {
      return Driver.find({ team: _id });
    }
  },
  Driver: {
    height: (obj, args) => {
      switch (args.unit) {
        case "CENTIMETER":
          return obj.height * 100;
        case "KILOMETER":
          return obj.height * 0.001;
        case "INCH":
          return obj.height * 39.3700787;
        case "FOOT":
          return obj.height * 3.2808399;
        case "YARD":
          return obj.height * 1.0936133;
        case "MILE":
          return obj.height * 0.000621371192;
        default:
          return obj.height;
      }
    },
    team: ({ _id }) => Team.findOne({ drivers: ObjectId(_id) })
  },
  Car: {
    weight(obj, args) {
      switch (args.unit) {
        case "POUND":
          return obj.weight * 2.20462262;
        default:
          return obj.weight;
      }
    }
  }
};

module.exports = resolvers;
