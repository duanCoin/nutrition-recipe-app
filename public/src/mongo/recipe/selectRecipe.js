'use strict';

const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/menu';

const findById = function (db, callback) {
  const collection = db.collection('menu');

  const whereStr = {sort: /req.query.sort/};
  console.log(whereStr)
  collection.find(whereStr).toArray(function (err, result) {
    if (err) {
      console.log('Error' + err);
      return;
    }
    callback(result);
  });
};

exports.findBySort = function (req, res) {
  console.log({sort:req.query.sort})

  MongoClient.connect(DB_CONN_STR, function (err, db) {
    findById(db, function (result) {
      db.close();
      res.json(result).end();
    });
  });
};

