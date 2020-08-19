const Driver = require("@database/model/driver/Driver");
const flatten = require('flat');

function findDriver(filter, sort, limit = 0) {
  const aggregation = [];
  
  if(filter && filter.country != undefined) {
    aggregation.push({
      $lookup: {
        from: "countries",
        localField: "country",
        foreignField: "_id",
        as: 'country'
      }
    })
  }

  if(sort != undefined) {
    aggregation.push({ $sort: sort })
  } else {
    aggregation.push({ $sort: { "lastname": 1, "firstname": 1 }})
  }

  if(filter != undefined) {
    aggregation.push({ $match: flatten(filter) })
  }

  if (limit > 0) {
    aggregation.push({ $limit: limit })
  }

  return Driver.aggregate(aggregation)
}

module.exports = findDriver;
