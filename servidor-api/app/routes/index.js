/* TODO Workaround para servir estáticos(front end) no mesmo server da API, segregar em dois containers */
const express = require('express');
const path = require('path');


var api = require('../api');

module.exports  = function(app) {
    /* TODO Workaround para servir estáticos(front end) no mesmo server da API, segregar em dois containers */
    app.use(express.static(path.join(__dirname, '../../..', 'dist')));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../..', 'dist', 'index.html'));
    });

    app.route('/dados')
        .get(api.dados);
};