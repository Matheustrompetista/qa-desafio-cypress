import { loginPage } from '../support/pages/loginPage';

describe('Fluxo de Login no SauceDemo', () => {

    it('Deve realizar login com sucesso usando credenciais válidas', () => {
        loginPage.acessarPagina();
        loginPage.preencherCredenciais('standard_user', 'secret_sauce');
        loginPage.clicarLogin();
        loginPage.validarLoginComSucesso();
    });

});