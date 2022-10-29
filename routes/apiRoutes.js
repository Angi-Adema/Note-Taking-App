const router = require('express').Router();
const fs = require('fs');
const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


//Get api and parse notes as JSON from db.json file.
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    
});

//Post api notes.
router.post('/notes', (req, res) => {

    const { title, text } = req.body;

    if (title, text) {
        const note = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(note, './db/db.json');
        res.json(`Note added successfully 🚀`);

    } else {
        res.status(500).json('Error saving note.');
    }
});

//Delete the note via specific id.
router.delete('/notes/:id', (req, res) => {
   readAndDelete('./db/db.json', req.params.id)
   res.json(`Note deleted successfully 🚀`);
});

module.exports = router;

