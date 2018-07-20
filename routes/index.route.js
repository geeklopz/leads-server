module.exports = function(app) {

    app.get('/', function(req, res) {
        /* res.send('<h1>Welcome to Form Server API v1</h1>'); */
        res.render("leads/form");

        //routes
        /*
            /leads
            /api/leads [GET]
            /api/leads [POST]

            /api/clubs [GET]
            /api/clubs/sectors ** [GET]

            /api/feeder
            /api/feeder/verify
            /api/feeder/login

        */

    });
}