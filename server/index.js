// JS server which handles requests from the client
// Main function is to get an image from the database
// and send it back to the client


const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const cors = require('cors');
const httpPort = 3000;


const imageController = require('./controllers/images.js');

// uses
app
    /*.use(cors({
        origin: "*",
        methods: ["GET", "POST"],
    }))*/

    .use(express.json())

    .use('/images', imageController)

    .use('/', express.static(path.join(__dirname, '..', '/docs/')))

    /*
      Access-Control-Allow-Origin: https://foo.example
      Access-Control-Allow-Methods: POST, GET, OPTIONS
      Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
     */
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');

        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        res.header('Access-Control-Allow-Headers', '*');
        next();
    })


// gets 
app
    .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))


app.listen(process.env.PORT || httpPort, () => console.log(`Listening on port ${httpPort}`));