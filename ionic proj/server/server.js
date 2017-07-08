// Set up
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

// Configuration
mongoose.connect('mongodb://localhost:27017/reviewking');
  //mongoose.connect('localhost:27017/reviewking');
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// Models


var Bikes = mongoose.model('Bikes', {
    bike_number: Number,
    bike_name: String,
    bike_type: String,
    cost_per_hour: Number,
    avilablity: Boolean,
    bike_image: String
});

var Hotels = mongoose.model('Hotels', {
    hoteluserid: Number,
    hotelName: String,
    hotelAddress: String,
    hotelCode: Number,
    phoneNo : String
});

// Routes

  app.get('/api/hotels', function(req, res) {


        // use mongoose to get all reviews in the database
        Hotels.find({'hoteluserid': 1},function(err, hotels) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
            res.json(hotels); // return all reviews in JSON format
        });
    });

    app.get('/api/bikes', function(req, res) {

        console.log("fetching bikes");

        // use mongoose to get all reviews in the database
        Bikes.find(function(err, bikes) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(bikes); // return all reviews in JSON format
        });
    });

      app.post('/api/hotels', function(req, res) {

        console.log("creating hotels");

        // create a review, information comes from request from Ionic
        Hotels.create({
            // title : req.body.title,
            // description : req.body.description,
            // rating: req.body.rating,
            // done : false

            hoteluserid: Number,
            hotelName: String,
            hotelAddress: String,
            hotelCode: Number,
            phoneNo : String
        }, function(err, review) {
            if (err)
                res.send(err);

            // get and return all the reviews after you create another
            Review.find(function(err, reviews) {
                if (err)
                    res.send(err)
                res.json(reviews);
            });
        });

    });




app.listen(8050);
console.log("App listening on port 8050");
