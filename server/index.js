// JS server which handles requests from the client
// Main function is to get an image from the database
// and send it back to the client


const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


// uses
app
    .use('/', express.static(path.join(__dirname, '..', '/docs/')))

    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Posts', '*');
    })

    .use(express.json())

// gets 
app
    .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))

app.listen(port, () => (
    console.log(`Server listening on port ${port}`)
))