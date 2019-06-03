const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {
    let query = `SELECT "dog_park".dog_park, "dog_park".park_image, "dog_park".id FROM "dog_park"
                JOIN "user" ON "user".home_dog_park_id="dog_park".id
                WHERE "user".id = $1;`;
    pool.query(query, [req.user.id])
        .then((results) => {
          //  console.log('GET from fetchHomeParkRouter router with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET in fetchHomeParkRouter router: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;