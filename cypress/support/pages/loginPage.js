class LoginPage {
    // Mapeamento dos elementos
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        titleProducts: () => cy.get('.title')
    }

    // Ações na página
    acessarPagina() {
        cy.visit('https://www.saucedemo.com/');
    }

    preencherCredenciais(usuario, senha) {
        this.elements.usernameInput().type(usuario);
        this.elements.passwordInput().type(senha);
    }

    clicarLogin() {
        this.elements.loginBtn().click();
    }

    validarLoginComSucesso() {
        this.elements.titleProducts().should('be.visible').and('contain', 'Products');
    }
}

// Exporta a classe para usarmos no teste
                                         export const loginPage = new LoginPage();