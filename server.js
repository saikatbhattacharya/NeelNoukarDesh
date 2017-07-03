var express = require('express');
var app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen(process.env.PORT||4000);