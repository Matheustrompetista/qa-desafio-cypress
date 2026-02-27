# Desafio QA - Testes de Interface com Cypress

Este repositório contém a automação dos fluxos de Login e Checkout do site SauceDemo, utilizando Cypress e o padrão Page Objects.

## Pré-requisitos
- Node.js instalado.

## Como instalar as dependências
Execute o comando abaixo na raiz do projeto:
`npm install`

## Como executar os testes
Para abrir a interface interativa do Cypress:
`npx cypress open`

Para rodar os testes em modo headless (segundo plano) no terminal:
`npx cypress run`

## Estrutura do Projeto
- `cypress/e2e/`: Contém os arquivos de teste (`.cy.js`).
- `cypress/support/pages/`: Contém as classes de Page Objects, separando a lógica de mapeamento e ações das páginas.