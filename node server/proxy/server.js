const express = require('express');
const app = express();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`listening on port ${port}.`);
});

app.get('/hello', (req, res) => {
    console.log(req.headers);
    res.send("Hello World");
});