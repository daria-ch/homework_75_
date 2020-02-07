const express = require('express');
const cors = require('cors');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.post('/encode/', (req, res) => {
    res.send({"encoded": Vigenere.Decipher(req.body.password).crypt(req.body.message)});
});

app.post('/decode/', (req, res) => {
    res.send({"decoded": Vigenere.Cipher(req.body.password).crypt(req.body.message)});
});

app.listen(port, () => {
    console.log('This is port: ' + port);
});
