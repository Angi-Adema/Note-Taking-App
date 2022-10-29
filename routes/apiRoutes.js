const fs = require('fs');
const router = require('express').Router();
const uuid = require('../Develop/db/helpers/uuid');

//Get api and parse notes as JSON from db.json file.
router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let existingNotes = JSON.parse(data);
            res.json(existingNotes);
        }
    })
});

//Post api notes.
router.post('/notes', (req, res) => {

    const { title, text } = req.body;

    if (title, text) {
        const notes = {
            title,
            text,
            id: uuid(),
        };
//Rcv new note to save on request body, add to db.json file then return the new note to the client. Need unique ID for saving.
        let existingNotes = [];

        fs.readFile('db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                existingNotes = JSON.parse(data);
                existingNotes.push(notes);
                fs.writeFileSync(
                    path.join(__dirname, '../db/db.json'),
                    JSON.stringify(existingNotes),
                    'utf8'
                );
            }
        });
        res.json(existingNotes);
    } else {
        res.status(500).json('Error saving note.');
    }
});

//Delete the note via specific id.
router.delete('/notes/:id', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
        } else {

        }
    })
});

module.exports = router;

