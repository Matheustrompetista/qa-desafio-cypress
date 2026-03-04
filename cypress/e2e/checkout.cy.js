import { loginPage } from '../support/pages/loginPage.js';
import { checkoutPage } from '../support/pages/checkoutPage.js';

describe('Fluxo de Checkout no SauceDemo', () => {

    // O beforeEach é um "Hook". Ele roda ANTES de cada bloco 'it'.
    // Ele garante que o robô vai logar de novo para o segundo teste!
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

    it('Deve bloquear o checkout se o campo Primeiro Nome estiver vazio', () => {
        checkoutPage.adicionarProdutoAoCarrinho();
        checkoutPage.irParaCheckout();
        checkoutPage.clicarContinuarSemDados();
        checkoutPage.validarMensagemDeErro('Error: First Name is required');
    });

});