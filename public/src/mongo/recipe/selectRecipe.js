'use strict';

const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/menu';

const findBySort = function (req, res) {
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    const collection = db.collection('recipe');
    const whereStr = {sort: req.params.sort};

    collection.find(whereStr).toArray(function (err, result) {
      if (err) {
        console.log('Error' + err);
        return;
      }
      db.close();
      res.json(result).end();
    });

  });
};

const findById = function (req, res) {
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    const collection = db.collection('recipe');
    const whereStr = {name: req.params.id};

    collection.find(whereStr).toArray(function (err, result) {
      if (err) {
        console.log('Error' + err);
        return;
      }
      db.close();
      res.json(result).end();
    });

  });
};

module.exports={findById,findBySort};
