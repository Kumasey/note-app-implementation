const express = require('express');
const bodyParser = require('body-parser');

//mount express app
const app = express();

const PORT = 3001
//pass request of content-type
app.use(bodyParser.urlencoded({ extended: true }));

//pass request of content-type application/json
app.use(bodyParser.json());

//database configuration
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//database connection
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
    console.log('Successfylly connected to database');
}).catch(err => {
    console.log('could not connect to the database. Exiting now...', err);
    process.exit();
});

//define a simple get route
app.get('/', (req, res) => {
    res.json({'Message': 'Welcome to note application, enjoy your experience'});
});

//require notes routes
require('./app/routes/note.routes.js')(app);

//listening for requests
app.listen(PORT, () => {
    console.log(`app listening at port: ${PORT}`)
});
