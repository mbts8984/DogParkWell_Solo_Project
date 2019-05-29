const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    
    let query = `SELECT "date", "time", "notes", "dog_park" FROM "playdates" 
                JOIN "user" ON "playdates".username_id="user".id
                JOIN "dog_park" ON "playdates".dog_park_id="dog_park".id
                WHERE "user".id = $1;
                `;
    pool.query(query, [req.user.id])
        .then((results) => {
            console.log('GET from dog park router with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET in tags router: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;