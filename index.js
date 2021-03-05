const express = require('express');
const app = express();

const listaUsuarios = [
    'Ivens',
    'Jailson',
    'Maria',
    'Natalia',
    'Ariel',
    'Nykolle'
];


//query params
//Ex: localhost:3000/usuarios?nome=Ivens
app.get('/usuarios',(req, res) => {
    
    const { nome } = req.query;
    let listaRetornp = listaUsuarios.filter(i => i.includes(nome || '' ));
    return res.json(listaUsuarios);
});

//Route params
//ex: ecomerce.com/produto/4/detalhes
app.get('/:usuario', (req, res) => {
    const { usuario } = req.params;
     return res.send(`hello world ${usuario}`);
} );

app.listen(3100, () => {
    console.log('servidor rodando na porta 3100');
});





//
