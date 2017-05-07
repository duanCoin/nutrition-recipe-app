'use strict';

const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/menu';


exports.findDetail = function (req, res) {
  console.log('=-===================')
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    const collection = db.collection('recipe');
    const whereStr = {id: req.params.id};

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
