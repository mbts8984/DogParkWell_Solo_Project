const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
const {rejectUnauthenticated} = require('../modules/authentication-middleware.js');

// makeNum(req.body.user.phone  => {
//  let newPhone = '';
//  newPhone = parseInt(req.body.user.phone)
//  console.log('newPhone here. should be a number.')
// )}




//Twilio config
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in sendMessage/twilio POST with req.body ', req.body);
    
    client.messages.create({
      from: process.env.SENDER,
      to: `+1${req.body.phone}`,
      body: `${req.body.human_name} is going to ${req.body.dog_park_id} on ${req.body.date} at ${req.body.time}. Notes on this playdate: ${req.body.notes}`
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


// router.post('/text', rejectUnauthenticated, (req, res) => {
//   console.log("req.body in text message:", req.body);
//   client.messages.create({
//       body: craftMessage(req.body.alert),
//       from: process.env.TWILLIO_NUMBER,
//       to: `+1${req.body.user.phone_number}`
//     })
//     .then(message => {
//       console.log(message.sid);
//       res.sendStatus(200);
//     })
//     .catch(error => {
//       console.log('error in sending text alert:', error);
//       res.sendStatus(500);
//     });
// })


module.exports = router;