# 🧪 Desafio QA - Automação Cypress (Front-end)

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Automação E2E (End-to-End) desenvolvida em **Cypress** para validar os fluxos críticos da aplicação SauceDemo, aplicando o padrão de projeto **Page Object Model (POM)** para garantir um código limpo e de fácil manutenção.

## 🎯 Escopo e Cenários (Happy & Unhappy Paths)
Foram desenvolvidos testes cobrindo tanto o uso correto do sistema quanto a validação de exceções e erros de formulário:
- ✅ Login com sucesso e ❌ Login com credenciais inválidas.
- ✅ Checkout de compras completo e ❌ Bloqueio de checkout com campos obrigatórios vazios.

## ⚙️ Integração Contínua (CI/CD) com GitHub Actions
O projeto conta com uma esteira de CI/CD configurada para acionamento automático (Shift-Left Testing).
- **Execução na Nuvem:** A cada novo *push*, o GitHub Actions executa os testes em modo **Headless** (background), garantindo a estabilidade através do container oficial do Cypress.
- **Evidências Automáticas:** Os testes foram configurados para gerar **Screenshots (`cy.screenshot`)** em momentos cruciais e automaticamente em caso de falha.
- **Artefatos:** Todos os vídeos e imagens gerados durante a execução ficam disponíveis para download na aba **Actions** do GitHub.

## 🚀 Como Executar Localmente
1. Clone o repositório e instale as dependências:
   ```bash
   npm install