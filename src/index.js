const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get("/",(req, res)=>{
    console.log("TESTE 22222")
    res.send("Hello Zé");
});

app.listen(PORT,HOST);