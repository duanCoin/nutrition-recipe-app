'use strict';

const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/menu';


exports.findByName = function (req, res) {
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    const collection = db.collection('menu');
    const name = req.query.name;
    const whereStr = {name:{$regex:name}};

    collection.find(whereStr).toArray(function (err, result) {
      if (err) {
        console.log('Error' + err);
        return;
      }

      if(result.length === 0){
        return res.sendStatus(404);
      }
      db.close();
      res.json(result).end();
    });

  });
};

exports.findBySort = function (req, res) {
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    const collection = db.collection('menu');
    const whereStr = {sort: req.query.sort};

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

