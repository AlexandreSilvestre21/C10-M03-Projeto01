const filmesService = require("../services/filmes.service");

const getFilmesController = (req, res) => {
    const filmes = filmesService.getFilmesService();
    res.send(filmes)
}

const getFilmesByIdController = (req, res) => {
    const id = req.params.id;
    const filme = filmesService.getFilmesByIdService(id)
    res.send(filme)
}

const createFilmeController = (req, res) => {
    const newFilme = req.body;
    filmesService.createFilmeService(newFilme);
    res.send({message: `Filme ${ newFilme.titulo }, cadastrado com sucesso!`});
}

module.exports = {
    getFilmesController,
    getFilmesByIdController,
    createFilmeController,
};