const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  console.log('in registration POST with body: ', req.body)
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);


  const queryText = 'INSERT INTO "user" (username, password, human_name, email, phone, preferred_contact_method, home_dog_park_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id';
  pool.query(queryText, [username, password, req.body.human_name, req.body.email, req.body.phone, req.body.preferred_contact_method, req.body.home_dog_park_id])
    .then((result) => {
      console.log('response from POST route: ', result)
      res.sendStatus(201)})
    .catch((error) => {
      console.log('error in POST : ', error)
      res.sendStatus(500)
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
