const express = require('express');
const app = express();
const path=require('path')

/* Heroku */
app.listen(proccess.env.PORT || 3000, ()=>{
    console.log("Servidor Funcionando");
});


app.use(express.static('public'));

app.listen(3000, ()=> console.log('Servidor Corriendo en el Puerto 3000.'));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
});

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
});