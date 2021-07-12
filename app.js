require("env2")(".env");
const express = require("express");

// Creating our express application
const app = express();
const server = require('http').createServer(app);
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set('view engine','ejs');
app.use(express.static('public'));

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Router API
require('./routes/routerAPI.js')(app);

// Router Web // use res.render to load up an ejs view file
require('./routes/routerWeb.js')(app);

// Run Server
server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = app;