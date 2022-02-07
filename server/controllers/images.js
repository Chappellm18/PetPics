const { Router } = require('express');
const express = require('express');
const model = require('../models/images');

const app = express.Router();

// get all images
app.get('/', (req, res, next) => {
    model.getAll().then(data => {
        res.json(data);
    }).catch(next);
});

// get image by id
app.get('/1', (req, res, next) => {
    model.getOne().then(data => res.json(data)).catch(next)
});

// post a new image to the database
app.post('/', (req, res, next) => {
    model.create(req.body).then(data => {
        res.json(data);
    }).catch(next);
});

module.exports = app;
