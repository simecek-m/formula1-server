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

// ^^ 2019
load("./documents/season/2019/cars.js");
load("./documents/season/2019/driverSeason.js");
load("./documents/season/2019/qualifying.js");
load("./documents/season/2019/fastestLaps.js");
load("./documents/season/2019/races.js");
load("./documents/season/2019/teamSeason.js");

// -------------------------- CREATE RELATIONS --------------------------
load("./relations/circuits.js");
load("./relations/countries.js");
load("./relations/drivers.js");
load("./relations/factories.js");
load("./relations/seasons.js");
load("./relations/teams.js");

// ^^ 2019
load("./relations/season/2019/cars.js");
load("./relations/season/2019/driverSeason.js");
load("./relations/season/2019/qualifying.js");
load("./relations/season/2019/fastestLaps.js");
load("./relations/season/2019/races.js");
load("./relations/season/2019/teamSeason.js");

// RACE - RESULT

// FASTEST_LAP - DRIVER
// FASTEST_LAP - TEAM

// RESULT - DRIVER
// RESULT - TEAM

// -------------------------- SAVE TO DATABASE --------------------------
load("./database/circuits.js");
load("./database/countries.js");
load("./database/drivers.js");
load("./database/factories.js");
load("./database/seasons.js");
load("./database/teams.js");

// ^^ 2019
load("./database/season/2019/cars.js");
load("./database/season/2019/driverSeason.js");
load("./database/season/2019/qualifying.js");
load("./database/season/2019/fastestLaps.js");
load("./database/season/2019/races.js");
load("./database/season/2019/teamSeason.js");
