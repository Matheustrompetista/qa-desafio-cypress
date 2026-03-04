class CheckoutPage {
    // Mapeamento dos elementos
    elements = {
        addCartBtn: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        cartLink: () => cy.get('.shopping_cart_link'),
        checkoutBtn: () => cy.get('#checkout'),
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),
        zipInput: () => cy.get('#postal-code'),
        continueBtn: () => cy.get('#continue'),
        finishBtn: () => cy.get('#finish'),
        successMessage: () => cy.get('.complete-header'),
        // 👇 NOVO: Mapeamos a caixa de erro para manter o seu padrão limpo!
        errorMessage: () => cy.get('[data-test="error"]')
    }

    // Ações na página
    adicionarProdutoAoCarrinho() {
        this.elements.addCartBtn().click();
        this.elements.cartLink().click();
    }

    irParaCheckout() {
        this.elements.checkoutBtn().click();
    }

    preencherDadosEntrega(nome, sobrenome, cep) {
        this.elements.firstNameInput().type(nome);
        this.elements.lastNameInput().type(sobrenome);
        this.elements.zipInput().type(cep);
        this.elements.continueBtn().click();
    }

    finalizarPedido() {
        this.elements.finishBtn().click();
    }

    validarMensagemDeSucesso() {
        this.elements.successMessage().should('be.visible').and('contain', 'Thank you for your order!');
    }

    //==========================================

    clicarContinuarSemDados() {

        this.elements.continueBtn().click();
    }

    validarMensagemDeErro(mensagemEsperada) {

        this.elements.errorMessage()
            .should('be.visible')
            .and('contain', mensagemEsperada);


        cy.screenshot('evidencia-erro-checkout');
    }
}

export const checkoutPage = new CheckoutPage();