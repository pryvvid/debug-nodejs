require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');
const validator = require('./middleware/validate-session')


db.sync();
app.use(express.json());
app.use('/api/auth', user);
app.use(validator);
app.use('/api/game', game);
app.listen(4000, function() {
    console.log("App is listening on 4000");
})