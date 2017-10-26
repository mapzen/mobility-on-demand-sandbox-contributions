'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const countries = require('country-list')();
const regions = require('country-region-data');
// const regions = import { data } from 'country-region-data';
// var regions = require('all-the-regions').regions
// const subregions = import { subregions } from 'all-the-regions'; console.log(subregions.Micronesia);


app.get('/countries', function (req, res) {
  res.json(countries.getNameList());
});

/*
 req.query should have ....
 { country: "US" }
 */
 // example: localhost:3000/regions?country=US
app.get('/regions', function (req, res) {
  for (var key in regions){
		if (regions[key].countryShortCode === req.query.country) {
			var regionList = regions[key].regions;
			res.body = regions[key].regions;
		}
	}
	console.log(res.body);
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