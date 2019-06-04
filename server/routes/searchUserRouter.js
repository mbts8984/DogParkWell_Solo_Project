const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {
   console.log('in searchUserRouter GET with req.params: ', req.query);
//    console.log('checking req: ',req);
   console.log('checking query stuff: ', `'%${req.query.search}%'`);
   
   
    let query = `SELECT "user".id, "user".human_name, "user".username, json_agg(json_build_object('dogName', "dog_data".dog_name, 'dogBreed', "dog_data".breed, 'dogColor', "dog_data".color ))
                AS dogInfo 
                FROM "user"
                FULL OUTER JOIN "dog_data" ON "dog_data".username_id="user".id
                FULL OUTER JOIN "dog_park" ON "dog_park".id="user".home_dog_park_id
                WHERE "human_name" ILIKE  $1
                GROUP BY "user".id
                ;`;
    pool.query(query, [`%${req.query.search}%`])
        .then((results) => {
            console.log('GET from SearchUserRouter router with results: ', results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET in tags router: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;