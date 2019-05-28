const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.post('/', (req, res) => {
   console.log('in addDog POST with req.body ', req.body);
   
    let query = `INSERT INTO "dog_data" ("username_id", "dog_name", "breed", "age", "gender", "color", "size")
                VALUES ($1,$2,$3,$4,$5,$6,$7);`;
    pool.query(query, [req.body.username_id, req.body.dog_name, req.body.breed, req.body.age, req.body.gender, req.body.color, req.body.size])
        .then((results) => {
            console.log('back from addDogRouter with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in POST in addDogRouter: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;