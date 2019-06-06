const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
const {rejectUnauthenticated} = require('../modules/authentication-middleware.js');
//import axios from 'axios';

// makeNum(req.body.user.phone  => {
//  let newPhone = '';
//  newPhone = parseInt(req.body.user.phone)
//  console.log('newPhone here. should be a number.')
// )}

router.get('/', (req, res) => {
  console.log('in get phoneNumbers GET');
  
  let query = `SELECT "user".phone FROM 
              (SELECT personone as friend_id FROM network WHERE persontwo = $1
              UNION 
              SELECT persontwo FROM network WHERE personone = $1) friend_id
              LEFT JOIN "user" ON friend_id.friend_id = "user".id
              ORDER BY "user".id;`;
    pool.query(query, [req.user.id])
      .then((results) => {
        console.log('back from phoneNumbers GET with results: ', results.rows);
        res.send(results.rows);
      }).catch((error) => {
        console.log('error in phoneNumbers GET: ', error)
        res.sendStatus(500)
      })
})


//Twilio config
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in sendMessage/twilio POST with req.body ', req.body);
    
    client.messages.create({
      from: process.env.SENDER,
      to: `+1${req.body.phone}`,
      body: `Your DogParkWell Friend ${req.body.human_name} is going to ${req.body.dogParkName} on ${req.body.date} at ${req.body.time}. Notes on this playdate: ${req.body.notes}`
    })
    .then(() => {
      console.log('sucessfully sent text via twilio post');
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('error in twilio post: ', err);
      res.sendStatus(500);
    });
})




module.exports = router;