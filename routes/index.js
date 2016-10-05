var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var db = require('../models/_db');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
 

router.get('/tripplanner/activities', function (req, res, next){
  res.render('activities');
});
 
router.get('/tripplanner', function(req, res, next){
var hotels,
      restaurants,
      activities;

  Promise.all([Hotel.findAll({}), Restaurant.findAll({}),Activity.findAll({})])
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

router.get('/',function(req,res, next) {
  var hotels,
      restaurants,
      activities;

  Promise.all([Hotel.findAll({}), Restaurant.findAll({}), Activity.findAll({})])
    .spread(function (_hotels,_restaurants,_activities) {
      res.render('index', {
      hotels : _hotels,
      restaurants : _restaurants,
      activities : _activities
    });
    })
    .catch(next);
});



module.exports = router;