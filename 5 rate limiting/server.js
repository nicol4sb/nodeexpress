const database = require('./database');
const express = require('express');

const app = express();
const accesses = {};

app.get('/index.html', (req, res) => {
    const{user} = req.headers;

    if(user in accesses){
        const previousAccessTime = accesses[user];
        if(Date.now() - previousAccessTime < 5000){
            res.status(429).send("Too many requests \n");
            return;
        }
    }
    database.get('index.html', page => {
        accesses[user] = Date.now();
        res.send(page);
    });
});


app.listen(3001, () => {
    console.log('listening on port 3001');
});