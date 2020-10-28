const database = require('./database');
const express = require('express');

const app = express();
const cache = {};
const redis = require('redis').createClient();

app.get('/nocache/index.html', (req, res) => {
    database.get('index.html', page => {
        res.send(page);
    });
});

app.get('/withcache/index.html', (req, res) => {
    redis.get('index.html', (err, redisRes) => {
        if(redisRes){
            res.send(redisRes);
            return;
        }

        database.get('index.html', page => {
            redis.set('index.html', page, 'EX', 10);
            res.send(page);
        });
    });
});

app.listen(3001, () => {
    console.log('listening on port 3001');
});