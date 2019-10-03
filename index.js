const PORT = 80;

const path = require('path');
const express = require('express');
const body = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

const indexPath = path.resolve(__dirname, './index.html');
const root = path.resolve(__dirname, 'src');
app.use(express.static(__dirname + '/src'));

app.use(body.json());

app.get('/favicon.ico', (req, res) => {
    res.sendFile(root + '/img/favicon.png');
});

app.get('*', (req, res) => {
    fs.readFile(indexPath, { encoding: 'utf-8' }, (err, file) => {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.end();
        }
        res.write(file);
        res.end();
    });
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening port ${process.env.PORT || PORT}`);
});