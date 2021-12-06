const express = require("express");

const router = express.Router();

const filmesController = require("../controllers/filmes.controller")

router.get("/get-filmes", filmesController.getFilmesController)
router.get("/get-by-id/:id", filmesController.getFilmesByIdController)

module.exports = router;

