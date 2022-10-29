const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware for JSON parsing and urlencoded data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Access to public folder.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Port listener.
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);