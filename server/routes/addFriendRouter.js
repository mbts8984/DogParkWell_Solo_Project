const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('in addFriend POST with req.body ', req.body.firstId, req.body.secondId);

    let query = `INSERT INTO "network" ("personone", "persontwo")
                VALUES ($1, $2);`;
    pool.query(query, [req.body.firstId, req.body.secondId])
        .then((results) => {
            console.log('back from addFriend Router with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in POST in addFriendRouter: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;