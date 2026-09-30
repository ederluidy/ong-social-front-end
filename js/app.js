import { renderizarRota } from "./router.js";
import {
    renderizarProjetos,
    buscarProjetoPorId
} from "./templates.js";
import {
    carregarCadastros,
    salvarCadastro
} from "./storage.js";

function validarCampo(campo) {
    const valor = campo.value.trim();
    let valido = true;
    let mensagem = "";

    if (campo.id === "nome") {
        valido = valor.length >= 3;
        mensagem = "Informe um nome com pelo menos 3 caracteres.";
    }

    if (campo.id === "email") {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        valido = regexEmail.test(valor);
        mensagem = "Informe um e-mail válido.";
    }

    if (campo.id === "telefone") {
        const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
        valido = regexTelefone.test(valor);
        mensagem = "Use o formato (00) 00000-0000.";
    }

    const feedback =
        campo.parentElement.querySelector(".mensagem");

    if (!valido) {
        campo.classList.add("campo-erro");
        campo.classList.remove("campo-sucesso");
        feedback.textContent = mensagem;
    } else {
        campo.classList.add("campo-sucesso");
        campo.classList.remove("campo-erro");
        feedback.textContent = "";
    }

    return valido;
}

function renderizarVoluntarios() {
    const lista = document.querySelector("#lista-voluntarios");

    if (!lista) {
        return;
    }

    const voluntarios = carregarCadastros();

    if (voluntarios.length === 0) {
        lista.innerHTML = `
            <li class="text-muted">
                Nenhum voluntário cadastrado.
            </li>
        `;
        return;
    }

    lista.innerHTML = voluntarios.map(voluntario => `
        <li>
            <strong>${voluntario.nome}</strong>
            <span>${voluntario.email}</span>
        </li>
    `).join("");
}

function atualizarPagina() {
    const rotaAtual = renderizarRota();

    if (rotaAtual === "#projetos") {
        renderizarProjetos();
    }

    if (rotaAtual === "#cadastro") {
        renderizarVoluntarios();
    }
}

const app = document.querySelector("#app");

app.addEventListener("input", event => {
    if (event.target.matches("#form-cadastro input")) {
        validarCampo(event.target);
    }
});

app.addEventListener("submit", event => {
    if (!event.target.matches("#form-cadastro")) {
        return;
    }

    event.preventDefault();

    const formulario = event.target;

    const nome = formulario.querySelector("#nome");
    const email = formulario.querySelector("#email");
    const telefone = formulario.querySelector("#telefone");

    const nomeValido = validarCampo(nome);
    const emailValido = validarCampo(email);
    const telefoneValido = validarCampo(telefone);

    if (!nomeValido || !emailValido || !telefoneValido) {
        return;
    }

    const voluntario = {
        nome: nome.value.trim(),
        email: email.value.trim(),
        telefone: telefone.value.trim()
    };

    salvarCadastro(voluntario);

    const resultado =
        document.querySelector("#resultado-cadastro");

    resultado.innerHTML = `
        <div class="alert alert-success mt-3" role="alert">
            Cadastro realizado com sucesso!
        </div>
    `;

    formulario.reset();

    formulario.querySelectorAll("input").forEach(campo => {
        campo.classList.remove("campo-sucesso");
        campo.classList.remove("campo-erro");
    });

    renderizarVoluntarios();
});

app.addEventListener("click", event => {
    const botao = event.target.closest(".btn-detalhes");

    if (!botao) {
        return;
    }

    const projeto = buscarProjetoPorId(botao.dataset.id);

    if (!projeto) {
        return;
    }

    alert(
        `${projeto.titulo}\n\n` +
        `${projeto.descricao}\n\n` +
        `Categoria: ${projeto.categoria}`
    );
});

window.addEventListener("hashchange", atualizarPagina);

window.addEventListener("DOMContentLoaded", atualizarPagina);