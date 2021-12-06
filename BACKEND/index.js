const express = require("express");

const app = express();

app.use(express.json());

const filmesRouter = require("./routes/filmes.routes");

app.use("/filmes", filmesRouter)

const port = 3000;

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
});


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




