const express = require('express');
const app = express();

app.get('//time', (req, res, next) => {
   res.end(String(Date.now()));
});

app.get('/canClaim', (req, res, next) => {
    const time = 1642626000000;
    const now = Date.now();
    if (time > now) {
        res.end("false");
    }
    res.end("true");
});

app.listen(3000, () => {
    console.log('Server start');
});
