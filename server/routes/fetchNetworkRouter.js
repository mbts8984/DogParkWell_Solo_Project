const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();


//GET route that gets every friend that the user that is logged in has
router.get('/', (req, res) => {

    console.log('in fetchNetworkRouter with user id: ', req.user.id );
    

    let query = `SELECT "user".human_name, "user".email, "user".phone, "dog_park".dog_park, friend_id.friend_id, "dog_data".dog_name, "dog_data".breed, "dog_data".color
                FROM
                (SELECT personone as friend_id FROM network WHERE persontwo = $1
                UNION
                SELECT persontwo FROM network WHERE personone = $1) friend_id
                LEFT JOIN "user" ON friend_id.friend_id = "user".id
                LEFT JOIN "dog_data" ON "dog_data".username_id="user".id
                LEFT JOIN "dog_park" ON "dog_park".id="user".home_dog_park_id
                ORDER BY "user".id
                ;`;
    pool.query(query, [req.user.id])
        .then((results) => {
            //  console.log('GET from fetchNetworkRouter router with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET in fetchNetworkRouter router: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;