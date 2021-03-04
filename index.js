const express = require('express');
const app = express();

app.get('/', (req, res) => {
     return res.send('hello world')
} )

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});





//
