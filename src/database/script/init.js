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

// teams
const mercedes = {
  _id: ObjectId(),
  name: "Mercedes",
  principal: "Toto Wolff",
  drivers: [hamilton._id, bottas._id],
  position: 1,
  points: 739,
  color: "#00D2BE"
  //TODO: complete data
  // car: Car!
};

const ferrari = {
  _id: ObjectId(),
  name: "Ferrari",
  principal: "Mattia Binotto",
  drivers: [vettel._id, leclerc._id],
  position: 2,
  points: 504,
  color: "#DC0000"
  //TODO: complete data
  // car: Car!
};

const redbull = {
  _id: ObjectId(),
  name: "Redbull",
  principal: "Christian Horner",
  drivers: [verstappen._id, albon._id],
  position: 3,
  points: 417,
  color: "#1E41FF"
  //TODO: complete data
  // car: Car!
};

const mclaren = {
  _id: ObjectId(),
  name: "McLaren",
  principal: "Andreas Seidl",
  drivers: [sainz._id, norris._id],
  position: 4,
  points: 145,
  color: "#FF8700"
  //TODO: complete data
  // car: Car!
};

const renault = {
  _id: ObjectId(),
  name: "Renault",
  principal: "Cyril Abiteboul",
  drivers: [hulkenberg._id, ricciardo._id],
  position: 5,
  points: 91,
  color: "#FFF500"
  //TODO: complete data
  // car: Car!
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

mercedes.residence = mercedes_residence._id;
ferrari.residence = ferrari_residence._id;
redbull.residence = redbull_residence._id;
mclaren.residence = mclaren_residence._id;
renault.residence = renault_residence._id;

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
  ricciardo
]);
db.teams.insertMany([mercedes, ferrari, redbull, mclaren, renault]);
db.countries.insertMany([
  britain,
  finland,
  germany,
  monaco,
  netherlands,
  thailand,
  italy,
  spain,
  australia
]);
db.residences.insertMany([
  mercedes_residence,
  ferrari_residence,
  redbull_residence,
  mclaren_residence,
  renault_residence
]);
