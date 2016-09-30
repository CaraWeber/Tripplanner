var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var db = require('../models/_db');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');


router.get('/',function(req,res) {
  var hotels,
      restaurants,
      activities;

  Promise.all([Hotel.findAll({})
    .then(), Restaurant.findAll({}).then(),Activity.findAll({}).then()])
    .spread(function (_hotels,_restaurants,_activities) {
      hotels = _hotels;
      restaurants = _restaurants;
      activities = _activities;
    })
    .catch(next);

    res.render('index', {
      hotels : hotels,
      restaurants : restaurants,
      activities : activities
    });

});

router.get('/activities', function (req, res, next){
  res.render('activities');
})
