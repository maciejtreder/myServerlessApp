const express = require('express');
const app = express();

let port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`

app.get('/', (req, res) => {
    res.status(200).send("hello world!");
});

// Server
app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});
