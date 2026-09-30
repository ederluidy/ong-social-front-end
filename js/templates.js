const projetos = [
    {
        id: 1,
        titulo: "Campanha de alimentos",
        categoria: "Doações",
        descricao: "Arrecadação de alimentos para famílias em situação de vulnerabilidade.",
        status: "Projeto ativo"
    },
    {
        id: 2,
        titulo: "Ação comunitária",
        categoria: "Voluntariado",
        descricao: "Atividades realizadas com voluntários para apoiar a comunidade.",
        status: "Inscrições abertas"
    },
    {
        id: 3,
        titulo: "Apoio educacional",
        categoria: "Educação",
        descricao: "Ações educativas destinadas a crianças e jovens da comunidade.",
        status: "Projeto ativo"
    }
];

export function criarCardsProjetos() {
    return projetos.map(projeto => `
        <div class="col-12 col-md-6 col-lg-4">
            <article class="card h-100">
                <div class="card-body">
                    <span class="badge text-bg-success mb-2">
                        ${projeto.status}
                    </span>

                    <h3 class="card-title">
                        ${projeto.titulo}
                    </h3>

                    <p class="categoria">
                        ${projeto.categoria}
                    </p>

                    <p class="card-text">
                        ${projeto.descricao}
                    </p>

                    <button
                        type="button"
                        class="btn btn-outline-primary btn-detalhes"
                        data-id="${projeto.id}">
                        Saiba mais
                    </button>
                </div>
            </article>
        </div>
    `).join("");
}

export function renderizarProjetos() {
    const container = document.querySelector("#lista-projetos");

    if (!container) {
        return;
    }

    container.innerHTML = criarCardsProjetos();
}

export function buscarProjetoPorId(id) {
    return projetos.find(
        projeto => projeto.id === Number(id)
    );
}