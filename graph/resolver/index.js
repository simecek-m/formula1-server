// test data => drivers
const vettel = {
  firstname: "Sebastian",
  lastname: "Vettel",
  nationality: "GERMAN"
};

const leclerc = {
  firstname: "Charles",
  lastname: "Leclerc",
  nationality: "MONACO"
};

const hamilton = {
  firstname: "Lewis",
  lastname: "Hamilton",
  nationality: "BRITISH"
};

const bottas = {
  firstname: "Valtteri",
  lastname: "Bottas",
  nationality: "FINNISH"
};

// test data => teams
const ferrari = {
  name: "Ferrari",
  principal: "Mattia Binotto",
  residence: {
    country: {
      name: "Great Britain"
    }
  },
  drivers: [vettel, leclerc]
};

const mercedes = {
  name: "Mercedes",
  principal: "Toto Wolff",
  active: true,
  residence: {
    country: {
      name: "Germany"
    }
  },
  drivers: [hamilton, bottas]
};

vettel.team = ferrari;
leclerc.team = ferrari;
bottas.team = mercedes;
hamilton.team = mercedes;

// test data => cars
const sf90 = {
  name: "Ferrari SF90",
  team: ferrari,
  drivers: [vettel, leclerc],
  fuel: "Shell",
  weight: 743
};

vettel.car = sf90;
leclerc.car = sf90;
ferrari.car = sf90;

const w10 = {
  name: "Mercedes AMG F1 W10 EQ Power+",
  team: mercedes,
  drivers: [hamilton, bottas],
  fuel: "Petronas",
  weight: 743
};

hamilton.car = w10;
bottas.car = w10;
mercedes.car = w10;

// joined data
const drivers = [hamilton, vettel, leclerc, bottas];
const teams = [ferrari, mercedes];
const cars = [sf90, w10];

const Driver = require("../../database/model/Driver");

const resolvers = {
  Query: {
    teams: () => teams,
    drivers: () => Driver.find(),
    cars: () => cars
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
