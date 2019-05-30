const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.put('/:id', (req, res) => {
    console.log('in updateUser PUT with req.body ', req.body);

    let query = `UPDATE "user" SET
                    email = $1,
                    phone = $2,
                    preferred_contact_method = $3
                    WHERE "user".id = $4;
    `;
    pool.query(query, [req.body.email, req.body.phone, req.body.preferred_contact_method, req.params.id])
        .then((results) => {
            console.log('back from addDogRouter with results: ', results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in POST in addDogRouter: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;