const Team = require("@database/model/team/Team");

function find(filter, sort, limit, array) {
  const aggregation = [];

  if (sort != undefined) {
    aggregation.push({ $sort: sort });
  } else {
    aggregation.push({ $sort: { name: 1 } });
  }

  if (filter != undefined) {
    aggregation.push({ $match: filter });
  }

  if (array != undefined) {
    aggregation.push({ $match: { _id: { $in: array } } });
  }

  if (limit > 0) {
    aggregation.push({ $limit: limit });
  }

  return Team.aggregate(aggregation);
}

function findById(id) {
  return Team.findById(id);
}

module.exports = {
  find,
  findById,
};
