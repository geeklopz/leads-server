var express = require('express');

module.exports = function(){
    var app = express();

    app.set('view engine','ejs');

    return app;
}