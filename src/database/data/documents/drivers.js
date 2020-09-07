const hamilton = {
  _id: ObjectId(),
  firstname: "Lewis",
  lastname: "Hamilton",
  height: 1.74,
  birthday: new Date("1985-01-07"),
  picture: "/static/assets/drivers/hamilton.jpg",
  links: {
    web: "https://www.lewishamilton.com/",
    instagram: "https://www.instagram.com/lewishamilton/",
    facebook: "https://www.facebook.com/LewisHamilton/",
  },
};

const bottas = {
  _id: ObjectId(),
  firstname: "Valtteri",
  lastname: "Bottas",
  height: 1.73,
  birthday: new Date("1989-08-28"),
  picture: "/static/assets/drivers/bottas.jpg",
  links: {
    web: "http://valtteribottas.com/",
    instagram: "https://www.instagram.com/valtteribottas/",
    facebook: "https://www.facebook.com/ValtteriBottas/",
  },
};

const vettel = {
  _id: ObjectId(),
  firstname: "Sebastian",
  lastname: "Vettel",
  height: 1.75,
  birthday: new Date("1987-07-03"),
  picture: "/static/assets/drivers/vettel.jpg",
  links: {
    web: "https://www.sebastianvettel.de/",
    instagram: null,
    facebook: null,
  },
};

const leclerc = {
  _id: ObjectId(),
  firstname: "Charles",
  lastname: "Leclerc",
  height: 1.8,
  birthday: new Date("1997-10-16"),
  picture: "/static/assets/drivers/leclerc.jpg",
  links: {
    web: "https://www.charlesleclerc.com/",
    instagram: "https://www.instagram.com/charles_leclerc/",
    facebook: "https://www.facebook.com/CharlesLeclercOfficiel/",
  },
};

const verstappen = {
  _id: ObjectId(),
  firstname: "Max",
  lastname: "Verstappen",
  height: 1.8,
  birthday: new Date("1997-09-30"),
  picture: "/static/assets/drivers/verstappen.jpg",
  links: {
    web: "https://www.verstappen.nl/en",
    instagram: "https://www.instagram.com/maxverstappen1/",
    facebook: "https://www.facebook.com/MaxVerstappen/",
  },
};

const albon = {
  _id: ObjectId(),
  firstname: "Alexander",
  lastname: "Albon",
  height: 1.86,
  birthday: new Date("1996-03-23"),
  picture: "/static/assets/drivers/albon.jpg",
  links: {
    web: "https://www.alexalbon.com/",
    instagram: "https://www.instagram.com/alex_albon/",
    facebook: "https://www.facebook.com/alexalbonofficial/",
  },
};

const sainz = {
  _id: ObjectId(),
  firstname: "Carlos",
  lastname: "Sainz",
  height: 1.78,
  birthday: new Date("1994-09-01"),
  picture: "/static/assets/drivers/sainz.jpg",
  links: {
    web: "https://www.carlossainz.es/",
    instagram: "https://www.instagram.com/carlossainz55/",
    facebook: "https://www.facebook.com/Carlossainz55/",
  },
};

const norris = {
  _id: ObjectId(),
  firstname: "Lando",
  lastname: "Norris",
  height: 1.7,
  birthday: new Date("1999-11-13"),
  picture: "/static/assets/drivers/norris.jpg",
  links: {
    web: "https://landonorris.com/",
    instagram: "https://www.instagram.com/landonorris/",
    facebook: "https://www.facebook.com/landonorris1/",
  },
};

const hulkenberg = {
  _id: ObjectId(),
  firstname: "Nico",
  lastname: "Hülkenberg",
  height: 1.84,
  birthday: new Date("1987-08-19"),
  picture: "/static/assets/drivers/hulkenberg.jpg",
  links: {
    web: "https://www.nicohulkenberg.net/",
    instagram: "https://www.instagram.com/hulkhulkenberg/",
    facebook: "https://facebook.com/NicoHulkenberg.official/",
  },
};

const ricciardo = {
  _id: ObjectId(),
  firstname: "Daniel",
  lastname: "Ricciardo",
  height: 1.78,
  birthday: new Date("1989-07-01"),
  picture: "/static/assets/drivers/ricciardo.jpg",
  links: {
    web: "https://danielricciardo.com/",
    instagram: "https://www.instagram.com/danielricciardo/",
    facebook: "https://facebook.com/DanielRicciardo/",
  },
};

const gasly = {
  _id: ObjectId(),
  firstname: "Pierre",
  lastname: "Gasly",
  height: 1.77,
  birthday: new Date("1996-02-07"),
  picture: "/static/assets/drivers/gasly.jpg",
  links: {
    web: "https://www.pierregasly.com/",
    instagram: "https://www.instagram.com/pierregasly/",
    facebook: "https://facebook.com/PierreGasly/",
  },
};

const kvyat = {
  _id: ObjectId(),
  firstname: "Daniil",
  lastname: "Kvyat",
  height: 1.82,
  birthday: new Date("1994-04-26"),
  picture: "/static/assets/drivers/kvyat.jpg",
  links: {
    web: "http://en.kvyat.com/",
    instagram: "https://www.instagram.com/danydk1/",
    facebook: null,
  },
};

const perez = {
  _id: ObjectId(),
  firstname: "Sergio",
  lastname: "Perez",
  height: 1.73,
  birthday: new Date("1990-01-26"),
  picture: "/static/assets/drivers/perez.jpg",
  links: {
    web: "https://sergioperez.mx/",
    instagram: "https://www.instagram.com/schecoperez/",
    facebook: "https://www.facebook.com/sergioperezf1/",
  },
};

const stroll = {
  _id: ObjectId(),
  firstname: "Lance",
  lastname: "Stroll",
  height: 1.73,
  birthday: new Date("1990-01-26"),
  picture: "/static/assets/drivers/stroll.jpg",
  links: {
    web: "https://www.lancestroll.com/",
    instagram: "https://www.instagram.com/lance_stroll/",
    facebook: "https://www.facebook.com/stroll.lance/",
  },
};

const raikkonen = {
  _id: ObjectId(),
  firstname: "Kimi",
  lastname: "Räikkonen",
  height: 1.75,
  birthday: new Date("1979-10-17"),
  picture: "/static/assets/drivers/raikkonen.jpg",
  links: {
    web: "https://www.kimiraikkonen.com/",
    instagram: "https://www.instagram.com/kimimatiasraikkonen/",
    facebook: null,
  },
};

const giovinazzi = {
  _id: ObjectId(),
  firstname: "Antonio",
  lastname: "Giovinazzi",
  height: 1.85,
  birthday: new Date("1993-12-14"),
  picture: "/static/assets/drivers/giovinazzi.jpg",
  links: {
    web: "http://antoniogiovinazzi.com/",
    instagram: "https://www.instagram.com/antogiovinazzi99/",
    facebook: null,
  },
};

const magnussen = {
  _id: ObjectId(),
  firstname: "Kevin",
  lastname: "Magnussen",
  height: 1.74,
  birthday: new Date("1992-10-05"),
  picture: "/static/assets/drivers/magnussen.jpg",
  links: {
    web: "https://kevinmagnussen.com/",
    instagram: "https://www.instagram.com/kevinmagnussen/",
    facebook: "https://facebook.com/KevinMagnussen/",
  },
};

const grosjean = {
  _id: ObjectId(),
  firstname: "Romain",
  lastname: "Grosjean",
  height: 1.8,
  birthday: new Date("1986-04-17"),
  picture: "/static/assets/drivers/grosjean.jpg",
  links: {
    web: "https://www.romaingrosjean.com/en/home/",
    instagram: "https://www.instagram.com/grosjeanromain/",
    facebook: "https://www.facebook.com/grosjeanromain/",
  },
};

const kubica = {
  _id: ObjectId(),
  firstname: "Robert",
  lastname: "Kubica",
  height: 1.84,
  birthday: new Date("1984-12-07"),
  picture: "/static/assets/drivers/kubica.jpg",
  links: {
    web: null,
    instagram: "https://www.instagram.com/robertkubica_real/",
    facebook: "https://www.facebook.com/KubicaOfficial/",
  },
};

const russell = {
  _id: ObjectId(),
  firstname: "George",
  lastname: "Russell",
  height: 1.85,
  birthday: new Date("1998-02-15"),
  picture: "/static/assets/drivers/russell.jpg",
  links: {
    web: "https://www.georgerussell63.com/",
    instagram: "https://www.instagram.com/georgerussell63/",
    facebook: "https://www.facebook.com/GeorgeRussell63/",
  },
};
