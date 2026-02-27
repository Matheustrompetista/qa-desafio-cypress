import { loginPage } from '../support/pages/loginPage.js';
import { checkoutPage } from '../support/pages/checkoutPage.js';

describe('Fluxo de Checkout no SauceDemo', () => {

    // O bloco beforeEach roda antes de cada teste (it).
    // Como precisamos estar logados para comprar, chamamos o login aqui!
    beforeEach(() => {
        loginPage.acessarPagina();
        loginPage.preencherCredenciais('standard_user', 'secret_sauce');
        loginPage.clicarLogin();
    });

    it('Deve realizar a compra de um produto com sucesso', () => {
        checkoutPage.adicionarProdutoAoCarrinho();
        checkoutPage.irParaCheckout();
        checkoutPage.preencherDadosEntrega('QA', 'Pleno', '12345-678');
        checkoutPage.finalizarPedido();
        checkoutPage.validarMensagemDeSucesso();
    });

});