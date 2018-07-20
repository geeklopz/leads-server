module.exports = function(app, _db) {

    app.get('/api/feeder', function(req, res) {

        _db.collection('feeder').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            res.send(result);
        });
    });


    app.get('/api/feeder/verify', function(req, res) {

        var user = req.params('user');
        var pass = req.params('pass');

        _db.collection('feeder').findOne({ User: user, Pass: pass }, function(err, result) {
            if (err) {
                throw err;
            }

            if (result != null) {
                if (result.User = user && result.Pass == pass)
                    res.send('true');
                else
                    res.send('false');
            } else {
                res.send('false');
            }


        });


    });

    app.get('/api/feeder/login', function(req, res) {

        _db.collection('feeder').find().project({ User: 1, Pass: 1, _id: 0 }).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            res.send(result);
        });
    });
}