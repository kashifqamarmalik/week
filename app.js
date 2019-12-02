'use strict';
const express = require('express');
const cors = require('cors');

// const multer = require('multer');
// const upload = multer({dest: 'uploads/'});
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const app = express();
const port = 3001;



app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(express.static('uploads'));
app.use('/thumbnails', express.static('thumbnails'));
app.use('/public', express.static('week2_public_html'));


app.use('/cat', catRoute);

app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
