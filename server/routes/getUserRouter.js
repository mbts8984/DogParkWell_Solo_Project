const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {
    let query = `SELECT "email", "phone", "preferred_contact_method", "dog_name", "dog_park", "breed", "color" FROM "user"
                JOIN "dog_data" ON "dog_data".username_id="user".id
                JOIN "dog_park" ON "dog_park".id="user".home_dog_park_id
                WHERE "user".id = $1;`;
    pool.query(query, [req.user.id])
        .then((results) => {
            console.log('GET from getSearchResultsRouter with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET in getSearchResultsRouter router: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;