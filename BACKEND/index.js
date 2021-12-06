const express = require("express");

const app = express();

const port = 3000;

const blueFilmes = [
    {
        id: 1,
        titulo: "Matrix",
        genero: "Ação",
        imagem: "imagem",
        nota: "Nota de 0 a 10",
        assistido: "assistido",
    },
    {
        id: 2,
        titulo: "Matrix Reloaded",
        genero: "Ação",
        imagem: "imagem",
        nota: "Nota de 0 a 10",
        assistido: "assistido",
    },
    {
        id: 3,
        titulo: "The Animatrix",
        genero: "Ação",
        imagem: "imagem",
        nota: "Nota de 0 a 10",
        assistido: "assistido",
    },
    {
        id: 4,
        titulo: "Matrix Revolutions",
        genero: "Ação",
        imagem: "imagem",
        nota: "Nota de 0 a 10",
        assistido: "assistido",
    },
    {
        id: 5,
        titulo: "Matrix Resurrections",
        genero: "Ação",
        imagem: "imagem",
        nota: "Nota de 0 a 10",
        assistido: "assistido",
    },
];

app.use(express.json());

app.all("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    
    next();   
});

app.get("/", (req, res) => {
    res.send("Olá Bluemers!");
});

app.get("/filmes", (req, res) => {
    res.send(blueFilmes);
})

app.get ("/filmes/:id", (req, res) => {
    const idParam = req.params.id; 

    const filmeEncontrado = blueFilmes.find((filme) => filme.id == idParam)

    res.send(filmeEncontrado);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
});


