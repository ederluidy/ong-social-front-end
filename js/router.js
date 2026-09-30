const rotas = {
    "#inicio": `
        <section class="pagina">
            <h2>Juntos por um Futuro Melhor</h2>
            <p>
                Conheça nossas ações e participe da transformação
                da comunidade.
            </p>

            <div class="alert alert-primary" role="alert">
                Bem-vindo à plataforma da ONG Social!
            </div>
        </section>
    `,

    "#projetos": `
        <section class="pagina">
            <h2>Projetos Sociais</h2>
            <p>Conheça algumas das iniciativas desenvolvidas pela ONG.</p>

            <div id="lista-projetos" class="row g-4">
                <!-- Os cards serão criados pelo templates.js -->
            </div>
        </section>
    `,

    "#cadastro": `
        <section class="pagina">
            <h2>Cadastro de Voluntário</h2>
            <p>Preencha seus dados para participar das nossas ações.</p>

            <form id="form-cadastro" novalidate>

                <div class="campo-formulario">
                    <label for="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        class="form-control"
                        autocomplete="name">

                    <small class="mensagem"></small>
                </div>

                <div class="campo-formulario">
                    <label for="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        class="form-control"
                        autocomplete="email">

                    <small class="mensagem"></small>
                </div>

                <div class="campo-formulario">
                    <label for="telefone">Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        class="form-control"
                        placeholder="(00) 00000-0000"
                        autocomplete="tel">

                    <small class="mensagem"></small>
                </div>

                <button type="submit" class="btn btn-primary">
                    Cadastrar
                </button>

            </form>

            <div id="resultado-cadastro"></div>

            <section class="cadastros-salvos">
                <h3>Voluntários cadastrados</h3>
                <ul id="lista-voluntarios"></ul>
            </section>
        </section>
    `
};

export function renderizarRota() {
    const app = document.querySelector("#app");
    const rotaAtual = window.location.hash || "#inicio";
    const conteudo = rotas[rotaAtual] || rotas["#inicio"];

    app.innerHTML = "";
    app.innerHTML = conteudo;

    return rotaAtual;
}