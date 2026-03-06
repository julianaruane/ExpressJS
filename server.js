const express = require ('express');
const app = express();

app.get('/adicao/:n1/:n2', (req,res) => {
    let n1 =parseInt(req.params.n1);
    let n2=parseInt (req.params.n2);
    let soma = n1+n2;
    res.send('resultado:'+ soma.toString());
});

app.get('/subtracao/:n1/:n2', (req,res) => {
    let n1= parseInt(req.params.n1);
    let n2= parseInt(req.params.n2);
    let subtracao = n1-n2;
    res.send('Resultado:'+subtracao.toString());
})

app.listen (3000, () => {
    console.log('pegou! :) ')
    console.log('Rota de Adiçãop: http://localhost:3000/adicao/20/5')
    console.log('Rota de Subtração: http://localhost:3000/subtracao/30/20')
});