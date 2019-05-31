const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.put('/:id', (req, res) => {
    console.log('in deleteEvent DELETE with req.body ', req.body);

    let query = `DELETE FROM "playdates" WHERE "id" = $1;`;
    pool.query(query, [req.body.id])
        .then((results) => {
            console.log('back from deleteEvent with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in DELETE in deleteEvent: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;