const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {
    let query = 'SELECT "dog_park".id, "dog_park".dog_park FROM "dog_park";';
    pool.query(query)
        .then((results) => {
            console.log('GET from dog park router with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET in tags router: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;