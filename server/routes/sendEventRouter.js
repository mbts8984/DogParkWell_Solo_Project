const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('in sendEvent POST with req.body ', req.body);

    let query = `INSERT INTO "playdates" ("date", "time", "dog_park_id", "notes", "username_id")
                 VALUES ($1, $2, $3, $4, $5);`;
    pool.query(query, [ req.body.date, req.body.time, req.body.dog_park_id, req.body.notes, req.body.id])
        .then((results) => {
            console.log('back from sendEvent with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in POST at sendEvent: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;