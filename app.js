const express = require('express');
const app = express();
const path=require('path')

/* Heroku */
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Servidor Funcionando");
});

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
});

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
});

app.get('/crear-producto', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/crear-producto.html'))
});