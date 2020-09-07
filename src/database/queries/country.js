const Country = require("@database/model/country/Country");

function find(filter, sort, limit = 0) {
  const aggregation = [];

  if (sort != undefined) {
    aggregation.push({ $sort: sort });
  } else {
    aggregation.push({ $sort: { name: 1 } });
  }

  if (filter != undefined) {
    aggregation.push({ $match: filter });
  }

  if (limit > 0) {
    aggregation.push({ $limit: limit });
  }

  return Country.aggregate(aggregation);
}

function findById(id) {
  return Country.findById(id);
}

module.exports = {
  find,
  findById,
};
