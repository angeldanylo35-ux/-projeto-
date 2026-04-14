const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// mostrar o HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'mediaNOTA.html'));
});

app.listen(3000, () => {
    console.log('Rodando em http://localhost:3000');
});