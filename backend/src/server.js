const express = require('express')
const cors = require('cors')
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'yan',
    password: '12345678',
    database: 'my_db'
});

const app = express();

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database.");
});

app.use(cors())

app.get('/api/users', function (req, res) {
    con.query(`SELECT * FROM users WHERE user = '${req.query.user}' AND password = '${req.query.password}'`, function (err, results){
        if (err) res.send(err);
        res.send(results);
    });
});

app.get('/api/transactions', function (req, res) {
    con.query(`SELECT * FROM transactions WHERE user = '${req.query.user}' ORDER BY date DESC`, function (err, results){
        if (err) res.send(err);
        res.send(results);
    });
});

app.listen(4000, () => {
    console.log('Running on port 4000');
});
