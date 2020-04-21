const express = require('express');
const app = express();
const router = require('./routers/router');
const bodyParser = require('body-parser');
require('dotenv').config();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.get('/user/:id', (req, res) => {
    res.send(req.params)
})


app.listen(process.env.PORT || 4000, () => console.log(`listening on port ${process.env.PORT}`));