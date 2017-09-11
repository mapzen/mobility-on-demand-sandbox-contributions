'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const countries = require('country-list')();


app.get('/countries', function (req, res) {
  res.json(countries.getNameList());
});

/*
 req.query should have ....
 { country: "us" }
 */
app.get('/regions', function (req, res) {
  console.log(req.query);
  res.sendStatus(200);
});

app.post('/job', function (req, res) {
  console.log(req.body);
  res.sendStatus(200);
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});