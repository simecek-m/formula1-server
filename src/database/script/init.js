const connection = new Mongo();
const db = connection.getDB("formula1");

db.drivers.insertMany([
  {
    firstname: "Lewis",
    lastname: "Hamilton",
    height: 174,
    birthday: "07.01.1985",
    nationality: "BRITISH",
    points: 413,
    position: 1
  },
  {
    firstname: "Sebastian",
    lastname: "Vettel",
    height: 175,
    birthday: "03.07.1987",
    nationality: "GERMAN",
    points: 240,
    position: 5
  }
]);
