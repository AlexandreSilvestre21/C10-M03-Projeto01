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

module.exports = {
    getFilmesController,
    getFilmesByIdController,
}