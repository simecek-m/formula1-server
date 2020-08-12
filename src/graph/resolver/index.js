// import
const { GraphQLScalarType } = require("graphql");
const moment = require("moment");

// mongoose models
const Driver = require("@database/model/driver/Driver");
const Team = require("@database/model/team/Team");
const Country = require("@database/model/location/Country");
const DriverSeason = require("@database/model/driver/DriverSeason");
const TeamSeason = require("@database/model/team/TeamSeason");
const Car = require("@database/model/car/Car");
const Circuit = require("@database/model/circuit/Circuit");
const Race = require("@database/model/race/Race");
const Season = require("@database/model/season/Season");
const Factory = require("@database/model/location/Factory");
const Qualifying = require("@database/model/race/Qualifying");
const FastestLap = require("@database/model/race/FastestLap");

const resolvers = {
  Query: {
    drivers: ( _, args) => Driver.find(args),
    driver: (_, { id }) => Driver.findById(id),
    driverSeasons: () => DriverSeason.find(),
    teams: (_, args) => Team.find(args),
    teamSeasons: () => TeamSeason.find(),
    cars: () => Car.find(),
    countries: (_, args) => Country.find(args),
    factories: () => Factory.find(),
    circuits: (_, args) => Circuit.find(args),
    seasons: (_, args) => Season.find(args),
    races: (_, args) => Race.find(args),
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date without time (YYYY-MM-DD)",
    serialize(value) {
      return moment(value).format("YYYY-MM-DD");
    }
  }),
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
    country: ({ country }) => Country.findById(country),
    seasons: ({ seasons }) => DriverSeason.find({ _id: { $in: seasons }})
  },
  DriverSeason: {
    teams: ({ teams }) => Team.find({ _id: { $in: teams }}),
    cars: ({ cars }) => Car.find({ _id: { $in: cars }}),
    driver: ({ driver }) => Driver.findById(driver),
    races: ({ races }) => Race.find({ _id: { $in: races }}),
    season: ({ season }) => Season.findById(season)
  },
  Team: {
    factory: ({ factory }) => Factory.findById(factory),
    seasons: ({ seasons }) => TeamSeason.find({ _id: { $in: seasons }})
  },
  TeamSeason: {
    team: ({ team }) => Team.findById(team),
    races: ({ races }) => Race.find({ _id: { $in: races }}),
    car: ({ car }) => Car.findById(car),
    drivers: ({ drivers }) => Driver.find({ _id: { $in: drivers} }),
    season: ({ season }) => Season.findById(season)
  },
  Car: {
    drivers: ({ drivers }) => Driver.find({ _id: { $in: drivers }}),
    team: ({ team }) => Team.findById(team),
    season: ({ season }) => Season.findById(season)
  },
  Factory: {
    country: ({ country }) => Country.findById(country),
    team: ({ team }) => Team.findById(team)
  },
  Country: {
    drivers: ({ drivers }) => Driver.find({ _id: { $in: drivers }}),
    factories: ({ factories }) => Factory.find({ _id: { $in: factories }}),
    circuits: ({ circuits }) => Circuit.find({_id: { $in: circuits }})
  },
  Circuit: {
    length: (obj, args) => {
      switch(args.unit){
        case "CENTIMETER":
          return obj.length * 100;
        case "KILOMETER":
          return obj.length * 0.001;
        case "INCH":
          return obj.length * 39.3700787;
        case "FOOT":
          return obj.length * 3.2808399;
        case "YARD":
          return obj.length * 1.0936133;
        case "MILE":
          return obj.length * 0.000621371192;
        default:
          return obj.length;
      }
    },
    country: ({ country }) => Country.findById(country),
    races: ({ races }) => Race.find({ _id: { $in: races }})
  },
  Season: {
    driverSeasons: ({ drivers }) => DriverSeason.find({ _id: { $in: drivers }}),
    teamSeasons: ({ teams }) => TeamSeason.find({ _id: { $in: teams }}),
    races: ({ races }) => Race.find({ _id: { $in: races }}),
    cars: ({ cars }) => Car.find({ _id: { $in: cars }})
  },
  Race: {
    season: ({ season }) => Season.findById(season),
    circuit: ({ circuit }) => Circuit.findById(circuit),
    qualifying: ({ qualifying }) => Qualifying.find({ _id: { $in: qualifying }}),
    fastestLaps: async ({ fastestLaps }) => FastestLap.find({ _id: { $in: fastestLaps }})
    // TODO: results: ({ results }) => Result.find({ _id: { $in: results }})
  },
  Qualifying: {
    driver: ({ driver }) => Driver.findById(driver),
    team: ({ team }) => Team.findById(team)
  },
  FastestLap: {
    driver: ({ driver }) => Driver.findById(driver),
    team: ({ team }) => Team.findById(team)
  }
  /* TODO: result resolver
  Result: {
    driver: ({ driver }) => Driver.findById(driver),
    team: ({ team }) => Team.findById(team)
  }
  */
};

module.exports = resolvers;
