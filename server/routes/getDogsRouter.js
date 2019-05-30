const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {
    let query = `SELECT "dog_name", "dog_data".id FROM "dog_data" 
                JOIN "user" ON "user".id = "dog_data".username_id
                WHERE "user".id = 3;`;
    pool.query(query)
        .then((results) => {
            console.log('GET from getDogsRouter router with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET in getDogsRouter router: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;