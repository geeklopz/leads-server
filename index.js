var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var _db = null


var app = express();

app.use(express.static('./public'));
app.set('view engine', 'ejs');

var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' });
app.use(jsonParser);
app.use(urlencodedParser);

//listen requests
app.listen(process.env.PORT || 3000, function() {
    console.log('Server: [OK]');
});

//mongodb://<dbuser>:<dbpassword>@ds155490.mlab.com:55490/capiroto
//MongoClient.connect('mongodb://buildup:buildupevents08@ds243441.mlab.com:43441/events-lead', function(err, db) {
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
    if (err) {
        throw err;
    }

    //ROTAS
    require('./routes/index.route.js')(app);
    require('./routes/leads.route.js')(app, db);
    require('./routes/clubs.route.js')(app, db);
    require('./routes/feeder.route.js')(app, db);

    console.log('Database: [OK]');

});
