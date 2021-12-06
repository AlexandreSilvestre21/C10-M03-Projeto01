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
]

const getFilmesService = () => {
    return blueFilmes;
}

const getFilmesByIdService = (idParam) => {
    return blueFilmes.find((filme) => filme.id == idParam);
}

const createFilmeService = (newFilme) => {
    const newId = blueFilmes.length + 1;
    newFilme.id = newId;
    blueFilmes.push(newFilme);
    return newFilme;
}

const updateFilmeService = (idParam, filmeEdit) => {
   const index = blueFilmes.findIndex((filme) => filme.id == idParam);
   
   if(index >= 0) {
    blueFilmes[index] = {
        ...blueFilmes[index],
        ...filmeEdit
    }
    return true
   } else {
    return false
   }
}


module.exports = {
    getFilmesService,
    getFilmesByIdService,
    createFilmeService,
    updateFilmeService,
}

