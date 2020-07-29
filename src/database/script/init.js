const connection = new Mongo();
const db = connection.getDB("formula1");
db.dropDatabase();

load("./documents/drivers.js");
load("./documents/teams.js");
load("./documents/cars.js");
load("./documents/countries.js");
load("./documents/factories.js");
load("./documents/circuits.js");
load("./documents/seasons.js");
load("./documents/driverSeasons/2019.js");
load("./documents/teamSeasons/2019.js");
load("./documents/grandsPrix/2019/races.js");
load("./documents/grandsPrix/2019/qualifying.js");

// -------------------------- RELATIONSHIPS --------------------------

load("./relations/drivers.js");
load("./relations/teams.js");
load("./relations/cars.js");
load("./relations/countries.js");
load("./relations/factories.js");
load("./relations/circuits.js");
load("./relations/driverSeasons/2019.js");
load("./relations/teamSeasons/2019.js");
load("./relations/seasons.js");

// RACE - SEASON
// RACE - CIRCUIT
// RACE - QUALIFYING
// RACE - FASTEST_LAP
// RACE - RESULT

// QUALIFYING - DRIVER
// QUALIFYING - TEAM

// FASTEST_LAP - DRIVER
// FASTEST_LAP - TEAM

// RESULT - DRIVER
// RESULT - TEAM

// -------------------------- RELATIONSHIPS --------------------------
