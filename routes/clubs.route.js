module.exports = function(app, _db) {

    app.get('/api/clubs', function(req, res) {

        _db.collection('clube').find().project({ Clube: 1, _id: 0 }).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            res.send(result);
        });

    });


    app.get('/api/clubs/sectors', function(req, res) {

        var club = req.params('club');

        _db.collection('clube').find({ Clube: club }).project({ Setores: 1, _id: 0 }).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            res.send(result[0].Setores);
        });
    });
}