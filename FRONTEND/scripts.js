
const apiUrl = "http://localhost:3000/filmes";
let modoEdicao = false;
let idEdicao = 0;

const lista = document.getElementById("lista");

const getFilmes = async () => {

  const response = await fetch(`${apiUrl}/get-filmes`);
  const filmes = await response.json();
  
  filmes.map((filme) => {
    console.log(filme.titulo);
    lista.insertAdjacentHTML(
      "beforeend",
      `
            <tr>
                <th scope="row">${filme.id}</th>
                <td>${filme.titulo}</td>
                <td>${filme.genero}</td>
                <td>${filme.imagem}</td>
                <td>${filme.nota}</td>
                <td>
                    <button class="btn btn-primary" onclick="editaFilme(${filme.id})">Editar</button>
                    <button class="btn btn-danger" onclick="deleteFilme(${filme.id})">Deletar</button>
                </td>
            </tr>
        `
    );
  });
};

getFilmes();

const escolherFilme = async () => {


  const idDigitado = document.getElementById("idFilme").value;

  const response = await fetch(`${apiUrl}/get-by-id/${idDigitado}`);
 
  const filme = await response.json();

  document.getElementById("filme").insertAdjacentHTML(
    "beforeend",
    `
        <tr>
            <th scope="row">${filme.id}</th>
            <td>${filme.titulo}</td>
            <td>${filme.genero}</td>
            <td>${filme.imagem}</td>
            <td>${filme.nota}</td>
        </tr>
    `
  );
};


const submitForm = async () => {

    // mapear os inputs com os dados que o usuario digitou idependente se é edicao ou cadastro
    const titulo = document.getElementById('titulo').value;
    const genero = document.getElementById('genero').value;
    const imagem = document.getElementById('imagem').value;
    const nota = document.getElementById('nota').value;
    console.log(titulo, genero, imagem, nota);

    // monta o objeto para ser enviado para o backend
    const filme = {
        titulo,
        genero,
        imagem,
        nota
    }
    console.log(filme);

    // JSON Stringfy = transforma um objeto/array js em um JSON string
    if(modoEdicao) {
        putFilme(filme);
    }else {
        postFilme(filme);
    }
    
}

// [POST] http://localhost:3000/vagas/add - Recebe o objeto transforma em JSON e envia para a api atraves do metodo post
const postFilme = async (filme) => {

    const response = await fetch(`${apiUrl}/create`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filme)
    })
    const data = await response.json();
    alert(data.message);

    // faz a chamada para a api com algumas configuracoes****
    lista.innerHTML = '';
    getFilmes();
    limpaCampos();
}

// [PUT] http://localhost:3000/vagas/edit/{id} - recebe o objeto transforma em json e envia para a api juntamente com o seu id para que possa
// ser editado
const putFilme = async (filme) => {

    const response = await fetch(`${apiUrl}/update/${idEdicao}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filme)
    })
    const data = await response.json();
    alert(data.message);

 
    lista.innerHTML = '';
    getFilmes();
    limpaCampos();

    modoEdicao = false;
    idEdicao = 0;
}

const editaFilme = async (id) => {

    modoEdicao = true;
    idEdicao = id;

    
    const filme = await getById(id);

    document.getElementById('titulo').value = filme.titulo;
    document.getElementById('genero').value  = filme.genero;
    document.getElementById('imagem').value = filme.imagem;
    document.getElementById('nota').value = filme.nota;

}


const getById = async (id) => {

    const response = await fetch(`${apiUrl}/get-by-id/${id}`)
    const filme = await response.json();
    return filme
}


const deleteFilme = async (id) => {
    const response = await fetch(`${apiUrl}/delete/${id}`, {
        method: 'DELETE'
    })
    const result = await response.json();
    alert(result.message);
    
        lista.innerHTML = '';
    getFilmes();
}


const limpaCampos = () => {

    document.getElementById('titulo').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('imagem').value = '';
    document.getElementById('nota').value = '';
}

