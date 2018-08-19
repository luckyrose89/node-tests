const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page Not Found',
        name: 'todo app v1'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([{
            name: 'divya',
            age: 28
        },
        {
            name: 'Tarah',
            age: 27
        },
        {
            name: 'Thor',
            age: 1000
        }]);
});

app.listen(3000);
module.exports.app = app;