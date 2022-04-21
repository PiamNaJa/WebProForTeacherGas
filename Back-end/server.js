const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Eiei');
});
app.get('/hello', function (req, res) {
    res.send('Get Hello');
});
app.get('/about', function (req, res) {
    res.send('It about');
});
app.get('/:heroes', function (req, res) {
    let heroes = req.params;
    res.render('heroes.ejs', heroes);
});
app.get('/list/member', function (req, res) {
    let member = {Name: 'Grace', Code:'01'};
    res.render('member.ejs',member);
});
app.get('*', function (req, res) {
    res.send('404');
});
app.listen(3000, function () {
    console.log("This port is 3000.")
});