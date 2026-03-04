import { loginPage } from '../support/pages/loginPage';

describe('Fluxo de Login no SauceDemo', () => {

    it('Deve realizar login com sucesso usando credenciais válidas', () => {
        loginPage.acessarPagina();
        loginPage.preencherCredenciais('standard_user', 'secret_sauce');
        loginPage.clicarLogin();
        loginPage.validarLoginComSucesso();
        cy.screenshot('evidencia-login-valido');
    });

});

it('Deve exibir erro ao tentar logar com senha incorreta', () => {
      // 1. Acessa a página
      loginPage.acessarPagina();

      // 2. Preenche com usuário válido, mas senha ERRADA
      loginPage.preencherCredenciais('standard_user', 'senha_errada_123');
      loginPage.clicarLogin();

      // 3. Valida a mensagem de erro vermelha do SauceDemo
      cy.get('[data-test="error"]')
          .should('be.visible')
          .and('contain', 'Epic sadface: Username and password do not match');

      cy.screenshot('evidencia-login-invalido');
  });