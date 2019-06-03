const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {
   console.log('in searchUserRouter GET with req.params: ', req.query);
   console.log('checking req: ',req);
   
   
    let query = `SELECT * FROM "user"
                WHERE "human_name" ILIKE '%$1%'
                ;`;
    pool.query(query)
        .then((results) => {
            console.log('GET from SearchUserRouter router with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET in tags router: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;