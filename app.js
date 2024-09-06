function busca() {
    let section = document.getElementById("resultados-pesquisa");
    let resultado = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhuma Faculdade foi encontrada!.</p>";
        return;
    }
    for (let dado of dados) {
        if (
            dado.nome.toLowerCase().includes(campoPesquisa) ||
            dado.descricao.toLowerCase().includes(campoPesquisa) ||
            dado.cidade.toLowerCase().includes(campoPesquisa)
        ) {
            resultado += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="cidade-meta">${dado.cidade}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
        `;
        }
    }
    section.innerHTML = resultado;
}
