const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();
const client = require('twilio')(
    process.env.TWILIO_SID,
    process.env.TWILIO_TOKEN);

router.post('/', (req, res) => {
    console.log('in sendMessage/twilio POST with req.body ', req.body);
    res.header('Content-Type', 'application/json');
    client.messages
    .create({
      from: process.env.SENDER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      console.log('sucessfully sent text via twilio post');
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log('error in twilio post: ', err);
      res.send(JSON.stringify({ success: false }));
    });
})


module.exports = router;