const connection = new Mongo();
const db = connection.getDB("formula1");
db.dropDatabase();

// -------------------------- CREATE DOCUMENTS --------------------------
load("./documents/circuits.js");
load("./documents/countries.js");
load("./documents/drivers.js");
load("./documents/factories.js");
load("./documents/seasons.js");
load("./documents/teams.js");
load("./documents/season/2019/cars.js");
load("./documents/season/2019/driverSeason.js");
load("./documents/season/2019/qualifying.js");
load("./documents/season/2019/races.js");
load("./documents/season/2019/teamSeason.js");

// -------------------------- CREATE RELATIONS --------------------------

load("./relations/drivers.js");
load("./relations/teams.js");
load("./relations/cars.js");
load("./relations/countries.js");
load("./relations/factories.js");
load("./relations/circuits.js");
load("./relations/driverSeasons/2019.js");
load("./relations/teamSeasons/2019.js");
load("./relations/seasons.js");
load("./relations/grandsPrix/2019/races.js");
load("./relations/grandsPrix/2019/qualifying.js");

// RACE - SEASON
// RACE - CIRCUIT
// RACE - QUALIFYING
// RACE - FASTEST_LAP
// RACE - RESULT

// FASTEST_LAP - DRIVER
// FASTEST_LAP - TEAM

// RESULT - DRIVER
// RESULT - TEAM

// -------------------------- SAVE TO DATABASE --------------------------
load("./database/drivers.js");
load("./database/teams.js");
load("./database/cars.js");
load("./database/countries.js");
load("./database/factories.js");
load("./database/circuits.js");
load("./database/driverSeasons.js");
load("./database/teamSeasons.js");
load("./database/seasons.js");
load("./database/races.js");
load("./database/2019/qualifying.js");
