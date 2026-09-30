const CHAVE_STORAGE = "voluntarios";

export function carregarCadastros() {
    const dados = localStorage.getItem(CHAVE_STORAGE);

    if (!dados) {
        return [];
    }

    try {
        return JSON.parse(dados);
    } catch (erro) {
        console.error(
            "Erro ao recuperar os cadastros do localStorage:",
            erro
        );

        return [];
    }
}

export function salvarCadastro(novoVoluntario) {
    const voluntarios = carregarCadastros();

    voluntarios.push(novoVoluntario);

    localStorage.setItem(
        CHAVE_STORAGE,
        JSON.stringify(voluntarios)
    );
}