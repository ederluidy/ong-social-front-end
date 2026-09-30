# ONG Social

Aplicação web desenvolvida como projeto acadêmico da disciplina de Desenvolvimento Front-End.

O projeto simula uma plataforma digital para uma organização do terceiro setor, permitindo apresentar projetos sociais e realizar o cadastro de voluntários.

## Funcionalidades

- Navegação em Single Page Application (SPA)
- Conteúdo renderizado dinamicamente com JavaScript
- Exibição de projetos sociais por templates dinâmicos
- Formulário de cadastro de voluntários
- Validação de campos com feedback visual
- Armazenamento dos voluntários no localStorage
- Persistência dos dados após atualização da página
- Integração com Bootstrap
- Navegação por teclado
- Link para pular diretamente ao conteúdo principal
- Indicadores visuais de foco para elementos interativos

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES6
- Bootstrap 5
- Web Storage API (localStorage)
- Git

## Estrutura do projeto

projeto-ong-exp3/
├── css/
│   └── estilos.css
├── html/
│   └── index.html
├── imagens/
├── js/
│   ├── app.js
│   ├── router.js
│   ├── storage.js
│   └── templates.js
└── README.md

## Organização do JavaScript

A aplicação utiliza módulos JavaScript separados por responsabilidade.

- app.js: inicialização e controle geral da aplicação.
- router.js: gerenciamento das rotas da SPA.
- templates.js: criação dos conteúdos e componentes dinâmicos.
- storage.js: operações de armazenamento e recuperação de dados no localStorage.

Essa divisão facilita a manutenção do código e reduz o acoplamento entre as funcionalidades.

## Acessibilidade

Foram implementadas melhorias de acessibilidade na interface, incluindo:

- idioma da página definido como pt-BR;
- utilização de elementos HTML semânticos;
- identificação da navegação principal;
- link "Pular para o conteúdo principal";
- foco visível durante a navegação por teclado;
- possibilidade de navegação utilizando Tab e Shift + Tab;
- região dinâmica da SPA identificada para tecnologias assistivas.

As funcionalidades de navegação por teclado e foco visível foram testadas no navegador.

## Como executar

Por utilizar módulos JavaScript ES6, o projeto deve ser executado através de um servidor HTTP local.

1. Inicie um servidor HTTP apontando para a pasta raiz do projeto.
2. Abra o endereço fornecido pelo servidor no navegador.
3. Acesse a pasta html.
4. Utilize o menu para navegar entre Início, Projetos e Cadastro.

Durante o desenvolvimento, o projeto foi testado utilizando um servidor HTTP local na porta 8080.

## Versionamento

O projeto utiliza Git para controle de versões e uma estrutura baseada no GitFlow.

Branches utilizadas:

- main: versão estável do projeto.
- develop: integração e desenvolvimento contínuo.
- feature/acessibilidade: implementação das melhorias de acessibilidade.

As alterações são registradas utilizando mensagens baseadas no padrão Conventional Commits.

## Autor

Éder Luidy