const express = require('express');
const expressWs = require('express-ws');

// dig further into how this exactly works 
const app = express();
expressWs(app);

const sockets = {};

// dig
app.use(express.json());

app.listen(3001, ()=> {
    console.log("listening on port 3001 !");
});

