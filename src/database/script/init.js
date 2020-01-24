const connection = new Mongo();
const db = connection.getDB("formula1");
db.dropDatabase();

// drivers
const hamilton = {
  _id: ObjectId(),
  firstname: "Lewis",
  lastname: "Hamilton",
  height: 1.74,
  birthday: new Date("1985-01-07"),
  points: 413,
  position: 1
};

const bottas = {
  _id: ObjectId(),
  firstname: "Valtteri",
  lastname: "Bottas",
  height: 1.73,
  birthday: new Date("1989-08-28"),
  points: 326,
  position: 2
};

const vettel = {
  _id: ObjectId(),
  firstname: "Sebastian",
  lastname: "Vettel",
  height: 1.75,
  birthday: new Date("1987-07-03"),
  points: 240,
  position: 5
};

const leclerc = {
  _id: ObjectId(),
  firstname: "Charles",
  lastname: "Leclerc",
  height: 1.8,
  birthday: new Date("1997-10-16"),
  points: 264,
  position: 4
};

const verstappen = {
  _id: ObjectId(),
  firstname: "Max",
  lastname: "Verstappen",
  height: 1.8,
  birthday: new Date("1997-09-30"),
  points: 278,
  position: 3
};

const albon = {
  _id: ObjectId(),
  firstname: "Alexander",
  lastname: "Albon",
  height: 1.86,
  birthday: new Date("1996-03-23"),
  points: 92,
  position: 8
};

const sainz = {
  _id: ObjectId(),
  firstname: "Carlos",
  lastname: "Sainz",
  height: 1.78,
  birthday: new Date("1994-09-01"),
  points: 96,
  position: 6
};

const norris = {
  _id: ObjectId(),
  firstname: "Lando",
  lastname: "Norris",
  height: 1.7,
  birthday: new Date("1999-11-13"),
  points: 49,
  position: 11
};

const hulkenberg = {
  _id: ObjectId(),
  firstname: "Nico",
  lastname: "Hülkenberg",
  height: 1.84,
  birthday: new Date("1987-08-19"),
  points: 37,
  position: 14
};

const ricciardo = {
  _id: ObjectId(),
  firstname: "Daniel",
  lastname: "Ricciardo",
  height: 1.78,
  birthday: new Date("1989-07-01"),
  points: 54,
  position: 9
};

const gasly = {
  _id: ObjectId(),
  firstname: "Pierre",
  lastname: "Gasly",
  height: 1.77,
  birthday: new Date("1996-02-07"),
  points: 95,
  position: 7
};

const kvyat = {
  _id: ObjectId(),
  firstname: "Daniel",
  lastname: "Kvyat",
  height: 1.82,
  birthday: new Date("1994-04-26"),
  points: 37,
  position: 13
};

const perez = {
  _id: ObjectId(),
  firstname: "Sergio",
  lastname: "Perez",
  height: 1.73,
  birthday: new Date("1990-01-26"),
  points: 52,
  position: 10
};

const stroll = {
  _id: ObjectId(),
  firstname: "Lance",
  lastname: "Stroll",
  height: 1.73,
  birthday: new Date("1990-01-26"),
  points: 21,
  position: 15
};

// teams
const mercedes = {
  _id: ObjectId(),
  name: "Mercedes",
  principal: "Toto Wolff",
  drivers: [hamilton._id, bottas._id],
  position: 1,
  points: 739,
  color: "#00D2BE"
};

const ferrari = {
  _id: ObjectId(),
  name: "Ferrari",
  principal: "Mattia Binotto",
  drivers: [vettel._id, leclerc._id],
  position: 2,
  points: 504,
  color: "#DC0000"
};

const redbull = {
  _id: ObjectId(),
  name: "Redbull",
  principal: "Christian Horner",
  drivers: [verstappen._id, albon._id],
  position: 3,
  points: 417,
  color: "#1E41FF"
};

const mclaren = {
  _id: ObjectId(),
  name: "McLaren",
  principal: "Andreas Seidl",
  drivers: [sainz._id, norris._id],
  position: 4,
  points: 145,
  color: "#FF8700"
};

const renault = {
  _id: ObjectId(),
  name: "Renault",
  principal: "Cyril Abiteboul",
  drivers: [hulkenberg._id, ricciardo._id],
  position: 5,
  points: 91,
  color: "#FFF500"
};

const toroRosso = {
  _id: ObjectId(),
  name: "Toro Rosso",
  principal: "Franz Tost",
  drivers: [gasly._id, kvyat._id],
  position: 6,
  points: 85,
  color: "#469BFF"
};

const racingPoint = {
  _id: ObjectId(),
  name: "Racing Point",
  principal: "Otmar Szafnauer",
  drivers: [perez._id, stroll._id],
  position: 7,
  points: 73,
  color: "#F596C8"
};

hamilton.team = mercedes._id;
bottas.team = mercedes._id;
vettel.team = ferrari._id;
leclerc.team = ferrari._id;
verstappen.team = redbull._id;
albon.team = redbull._id;
sainz.team = mclaren._id;
norris.team = mclaren._id;
hulkenberg.team = renault._id;
ricciardo.team = renault._id;
gasly.team = toroRosso._id;
kvyat.team = toroRosso._id;
perez.team = racingPoint._id;
stroll.team = racingPoint._id;

// cars
const ferrari_car = {
  _id: ObjectId(),
  name: "Ferrari SF90",
  team: ferrari._id,
  drivers: [vettel._id, leclerc._id],
  engine: null,
  fuel: "Shell V-Power",
  weight: 743
};

ferrari.car = ferrari_car._id;
vettel.car = ferrari_car._id;
leclerc.car = ferrari_car._id;

const mercedes_car = {
  _id: ObjectId(),
  name: "Mercedes W10",
  team: mercedes._id,
  drivers: [hamilton._id, bottas._id],
  engine: null,
  fuel: "Petronas Primax",
  weight: 743
};

mercedes.car = mercedes_car._id;
hamilton.car = mercedes_car._id;
bottas.car = mercedes_car._id;

const redbull_car = {
  _id: ObjectId(),
  name: "RedBull RB15",
  team: redbull._id,
  drivers: [verstappen._id, albon._id],
  engine: null,
  fuel: "Esso Synergy",
  weight: 743
};

redbull.car = redbull_car._id;
verstappen.car = redbull_car._id;
albon.car = redbull_car._id;

const mclaren_car = {
  _id: ObjectId(),
  name: "McLaren MCL34",
  team: mclaren._id,
  drivers: [sainz._id, norris._id],
  engine: null,
  fuel: "BP Ultimate",
  weight: 743
};

mclaren.car = mclaren_car._id;
sainz.car = mclaren_car._id;
norris.car = mclaren_car._id;

const renault_car = {
  _id: ObjectId(),
  name: "Renault R.S.19",
  team: renault._id,
  drivers: [hulkenberg._id, ricciardo._id],
  engine: null,
  fuel: "BP Ultimate",
  weight: 743
};

renault.car = renault_car._id;
hulkenberg.car = renault_car._id;
ricciardo.car = renault_car._id;

const toroRosso_car = {
  _id: ObjectId(),
  name: "Toro Rosso STR14",
  team: toroRosso._id,
  drivers: [gasly._id, kvyat._id],
  engine: null,
  fuel: "Mobil Synergy",
  weight: 743
};

toroRosso.car = toroRosso_car._id;
gasly.car = toroRosso_car._id;
kvyat.car = toroRosso_car._id;

const racingPoint_car = {
  _id: ObjectId(),
  name: "Racing Point RP19",
  team: racingPoint._id,
  drivers: [perez._id, stroll._id],
  engine: null,
  fuel: "Petronas",
  weight: 743
};

racingPoint.car = racingPoint_car;
perez.car = racingPoint_car;
stroll.car = racingPoint_car;

// countries
const britain = {
  _id: ObjectId(),
  name: "Great Britain",
  drivers: [hamilton._id, norris._id],
  teams: [mercedes._id, redbull._id, mclaren._id],
  circuits: [],
  flag: "/static/assets/flag/britain.svg"
};

const finland = {
  _id: ObjectId(),
  name: "Finland",
  drivers: [bottas._id],
  circuits: [],
  flag: "/static/assets/flag/finland.svg"
};

const germany = {
  _id: ObjectId(),
  name: "Germany",
  drivers: [vettel._id],
  circuits: [],
  flag: "/static/assets/flag/germany.svg"
};

const monaco = {
  _id: ObjectId(),
  name: "Monaco",
  drivers: [leclerc._id],
  circuits: [],
  flag: "/static/assets/flag/monaco.svg"
};

const netherlands = {
  _id: ObjectId(),
  name: "Netherlands",
  drivers: [verstappen._id],
  circuits: [],
  flag: "/static/assets/flag/netherlands.svg"
};

const thailand = {
  _id: ObjectId(),
  name: "Thailand",
  drivers: [albon._id],
  circuits: [],
  flag: "/static/assets/flag/thailand.svg"
};

const italy = {
  _id: ObjectId(),
  name: "Italy",
  drivers: [],
  teams: [ferrari._id],
  circuits: [],
  flag: "/static/assets/flag/italy.svg"
};

const spain = {
  _id: ObjectId(),
  name: "Spain",
  drivers: [sainz._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/spain.svg"
};

const australia = {
  _id: ObjectId(),
  name: "Australia",
  drivers: [ricciardo._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/australia.svg"
};

const france = {
  _id: ObjectId(),
  name: "France",
  drivers: [gasly._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/france.svg"
};

const russia = {
  _id: ObjectId(),
  name: "Russia",
  drivers: [kvyat._id],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/russia.svg"
};

const bahrain = {
  _id: ObjectId(),
  name: "Bahrain",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/bahrain.svg"
};

const china = {
  _id: ObjectId(),
  name: "China",
  drivers: [],
  teams: [],
  circuits: [],
  flag: "/static/assets/flag/china.svg"
};

const belgium = {
  _id: ObjectId(),
  name: "Belgium",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/belgium.svg"
};

const poland = {
  _id: ObjectId(),
  name: "Poland",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/poland.svg"
};

const hungary = {
  _id: ObjectId(),
  name: "Hungary",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/hungary.svg"
};

const austria = {
  _id: ObjectId(),
  name: "Austria",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/austria.svg"
};

const canada = {
  _id: ObjectId(),
  name: "Canada",
  drivers: [stroll._id],
  circuits: [],
  flag: "/static/assets/flag/canada.svg"
};

const azerbaijan = {
  _id: ObjectId(),
  name: "Azerbaijan",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/azerbaijan.svg"
};

const usa = {
  _id: ObjectId(),
  name: "USA",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/usa.svg"
};

const brazil = {
  _id: ObjectId(),
  name: "Brazil",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/brazil.svg"
};

const japan = {
  _id: ObjectId(),
  name: "Japan",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/japan.svg"
};

const singapore = {
  _id: ObjectId(),
  name: "Singapore",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/singapore.svg"
};

const mexico = {
  _id: ObjectId(),
  name: "Mexico",
  drivers: [perez._id],
  circuits: [],
  flag: "/static/assets/flag/mexico.svg"
};

const emirates = {
  _id: ObjectId(),
  name: "United Arab Emirates",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/emirates.svg"
};

const vietnam = {
  _id: ObjectId(),
  name: "Vietnam",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/vietnam.svg"
};

const denmark = {
  _id: ObjectId(),
  name: "Denmark",
  drivers: [],
  circuits: [],
  flag: "/static/assets/flag/denmark.svg"
};

hamilton.country = britain._id;
bottas.country = finland._id;
vettel.country = germany._id;
leclerc.country = monaco._id;
verstappen.country = netherlands._id;
albon.country = thailand._id;
sainz.country = spain._id;
norris.country = britain._id;
hulkenberg.country = germany._id;
ricciardo.country = australia._id;
gasly.country = france._id;
kvyat.country = russia._id;
perez.country = mexico._id;
stroll.country = canada._id;

// residences
const mercedes_residence = {
  _id: ObjectId(),
  country: britain._id,
  city: "Brackley"
};

const ferrari_residence = {
  _id: ObjectId(),
  country: italy._id,
  city: "Maranello"
};

const redbull_residence = {
  _id: ObjectId(),
  country: britain._id,
  city: "Milton Keynes"
};

const mclaren_residence = {
  _id: ObjectId(),
  country: britain._id,
  city: "Woking"
};

const renault_residence = {
  _id: ObjectId(),
  country: britain._id,
  city: "Enstone"
};

const toroRosso_residence = {
  _id: ObjectId(),
  country: italy._id,
  city: "Faenza"
};

const racingPoint_residence = {
  _id: ObjectId(),
  country: britain._id,
  city: "Silverstone"
};

mercedes.residence = mercedes_residence._id;
ferrari.residence = ferrari_residence._id;
redbull.residence = redbull_residence._id;
mclaren.residence = mclaren_residence._id;
renault.residence = renault_residence._id;
toroRosso.residence = toroRosso_residence._id;
racingPoint.residence = racingPoint_residence._id;

// circuits
const melbourne = {
  _id: ObjectId(),
  name: "Melbourne Grand Prix Circuit",
  city: "Melbourne",
  country: australia._id,
  opened: new Date("1953-11-20"),
  corners: [],
  length: 5303,
  active: true,
  map: null
};

const bahrain_circuit = {
  _id: ObjectId(),
  name: "Bahrain International Circuit",
  city: "Sakhir",
  country: bahrain._id,
  opened: new Date("2004-03-17"),
  corners: [],
  length: 5412,
  active: true,
  map: null
};

const shanghai = {
  _id: ObjectId(),
  name: "Shangai International Circuit",
  city: "Shangai",
  country: china._id,
  opened: new Date("2004-06-06"),
  corners: [],
  length: 5451,
  active: true,
  map: null
};

const imola = {
  _id: ObjectId(),
  name: "Autodromo Enzo e Dino Ferrari",
  city: "Imola",
  country: italy._id,
  opened: new Date("1952-10-19"),
  corners: [],
  length: 4909,
  active: false,
  map: null
};

const monza = {
  _id: ObjectId(),
  name: "Autodromo Nazionale Monza",
  city: "Monza",
  country: italy._id,
  opened: new Date("1922-09-03"),
  corners: [],
  length: 5793,
  active: true,
  map: null
};

australia.circuits = [melbourne._id];
bahrain.circuits = [bahrain_circuit._id];
china.circuits = [shanghai._id];

italy.circuits = [imola._id, monza._id];

// insert documents into DB
db.drivers.insertMany([
  hamilton,
  bottas,
  vettel,
  leclerc,
  verstappen,
  albon,
  sainz,
  norris,
  hulkenberg,
  ricciardo,
  gasly,
  kvyat,
  perez,
  stroll
]);
db.teams.insertMany([
  mercedes,
  ferrari,
  redbull,
  mclaren,
  renault,
  toroRosso,
  racingPoint
]);
db.countries.insertMany([
  britain,
  finland,
  germany,
  monaco,
  netherlands,
  thailand,
  italy,
  spain,
  australia,
  france,
  russia,
  bahrain,
  china,
  austria,
  azerbaijan,
  belgium,
  brazil,
  canada,
  hungary,
  japan,
  mexico,
  poland,
  singapore,
  usa,
  vietnam,
  denmark
]);
db.residences.insertMany([
  mercedes_residence,
  ferrari_residence,
  redbull_residence,
  mclaren_residence,
  renault_residence,
  toroRosso_residence,
  racingPoint_residence
]);
db.circuits.insertMany([melbourne, bahrain_circuit, shanghai, imola, monza]);
db.cars.insertMany([
  ferrari_car,
  mercedes_car,
  redbull_car,
  mclaren_car,
  renault_car,
  toroRosso_car,
  racingPoint_car
]);
