// import
const { GraphQLScalarType } = require("graphql");
const moment = require("moment");

// mongoose models
const Driver = require("@database/model/driver/Driver");
const Team = require("@database/model/team/Team");
const Country = require("@database/model/location/Country");

const resolvers = {
  Query: {
    teams: () => Team.find(),
    drivers: () => Driver.find(),
    countries: () => Country.find()
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date without time (YYYY-MM-DD)',
    serialize(value) {
      return moment(value).format("YYYY-MM-DD");
    }
  }),
  Team: {
    drivers: ({ _id }) => Driver.find({ team: _id })
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
    team: ({ _id }) => Team.findOne({ drivers: _id }),
    country: ({ _id }) => Country.findOne({ drivers: _id })
  },
  Country: {
    drivers: ({ _id }) => Driver.find({ country: _id })
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
