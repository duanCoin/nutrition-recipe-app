'use strict';

const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/menu';

const findByName = function (db, callback) {
  const collection = db.collection('menu');

  const whereStr = {};
  collection.find(whereStr).toArray(function (err, result) {
    if (err) {
      console.log('Error' + err);
      return;
    }
    callback(result);
  });
};

exports.findAll = function (req, res) {

  MongoClient.connect(DB_CONN_STR, function (err, db) {
    findByName(db, function (result) {
      db.close();
      res.json(result).end();
    });
  });
};
