const express = require('express');
const newLocal = require('./config/database.config');
const dbConfig = newLocal;
const mongoose = require('mongoose');
const createServer = require('./server');

//mount express app
// const app = express();
const app = createServer();

const PORT = 3001
//pass request of content-type
app.use(express.urlencoded({ extended: true }));

//pass request of content-type application/json
// app.use(express.json());

//database configuration


mongoose.Promise = global.Promise;

//database connection
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
    console.log('Successfylly connected to database')
    app.listen(PORT, () => {
        console.log(`app listening at port: ${PORT}`)
    });
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

