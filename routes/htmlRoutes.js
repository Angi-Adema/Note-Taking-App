const router = require('express').Router();
const path = require('path');

//Renders the notes.html file.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//Renders the index.html file.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//Export
module.exports = router;