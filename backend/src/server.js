const express = require('express');
const cors = require('cors');
const {
  getUserBalance,
  getAllUsers,
  addUserBalance,
  createAccount,
  updateBalance,
  deleteAccount,
} = require("../database-mysql/index.js");
const mysql = require('mysql');
const db = require('../database-mysql');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
app.use(cors())
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'banking_system',
});



con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database.");
    // Get all users
});
app.get("/api/users", async (req, res) => {
  try {
    const getAllUsers = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// PUT (update) user balance

app.put('/api/users/:name/:id', async (req, res) => {
  try {
    const updateBalance = await db.con.query(db.updateBalance, [req.body.amount, req.params.name]);
    console.log('Update balance worked');
    const decreaseBalance = await db.con.query(db.decreaseBalance, [req.body.amount, req.params.id]);
    console.log('Decrease balance worked');
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
// POST (create) a new user account
app.post('/api/users', async (req, res) => {
  try {
    const createAccount = await db.con.query(db.cretaeAccount, [req.body.balance, req.body.name]);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
// Delete a user account
app.delete('/api/users/:name', async (req, res) => {
  try {
    const deleteAccount = await db.con.query(db.deleteAccount, [req.params.name]);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
//  PATCH (update) user name
app.patch('/api/users/:id', async (req, res) => {
  try {
    const updateName = await db.con.query(db.updateName, [req.body.name, req.params.id]);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// GET all transactions for a user
app.get('/api/transactions', function (req, res) {
  const { user } = req.query;
  con.query(
    `SELECT * FROM transactions WHERE user = ? ORDER BY date DESC`,
    [user],
    function (err, results) {
      if (err) {
        console.log(err);
        res.status(500).send('Error retrieving transactions');
      } else {
        res.status(200).send(results);
      }
    }
  );
});

//POST to register a new user

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
        res.send({ success: false });
      }
  
      con.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, hash],
        (err, result) => {
          if (err) {
            console.log(err);
            res.send({ success: false });
          }
  
          res.send({ success: true });
        }
      );
    });
  });
  //GET and POST to handle user login
  app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });
  
  app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    con.query(
      "SELECT * FROM users WHERE username = ?;",
      username,
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
  
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              req.session.user = result;
              console.log(req.session.user);
              res.send(result);
            } else {
              res.send({ message: "Wrong username/password combination!" });
            }
          });
        } else {
          res.send({ message: "User doesn't exist" });
        }
      }
    );
  });
  

app.listen(3000, () => {
    console.log('Running on port 3000')
})