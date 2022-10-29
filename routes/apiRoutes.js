const fs = require('fs');
const router = require('express').Router();
const uuid = require('../Develop/db/helpers/uuid');

//Parse notes as JSON from db.json file.
router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let
        }
    })
})
