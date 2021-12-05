const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá Bluemers!");
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
});


