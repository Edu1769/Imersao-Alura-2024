function pesquisar() {

    let nomeArt = ""; 

    let section = document.getElementById("descricao");
    let test = document.getElementById("inf");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    
    if (!campoPesquisa) {
        section.innerHTML = '<p>Você precisa digitar o nome de um artista ou genero!!</p>'
        return 
    }

    for (let dado of artistas) {
        nomeArt = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (nomeArt.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="conteudo">
                    <img src="${dado.foto}" alt="">
                    <h2>
                        <a href="informacoes.html?nome=${dado.nome}&foto=${dado.foto}&descricao=${dado.descricao}&musica=${dado.musicaMaisFamosa}&seguidores=${dado.seguidores}">
                            ${dado.nome}
                        </a>
                    </h2>
                </div>
            `;
        }
    }
    
    section.innerHTML = resultados;

}