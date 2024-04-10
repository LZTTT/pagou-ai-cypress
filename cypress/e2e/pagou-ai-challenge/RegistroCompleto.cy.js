describe('Pagou.ai Challange - Tacio', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:5173/register')
        // Verifica se a pagina de Registrar foi carregada
        cy.contains('Nova conta').should('be.visible')
      })

    
    it('Fazendo registro completo com usuario e verificando pagina de Finalizar Cadastro', () => {

        let randomEmail = `mariotest${Cypress._.random(1000, 9999)}@example.com`;
        let randomCelular = `2193333${Cypress._.random(1000, 9999)}`;

        cy.RegistroNome('Mario Augusto')
        cy.RegistroEmail(randomEmail)
        cy.RegistroCelular(randomCelular)
        cy.RegistroSenha('Algumasenhaai@123459')
        cy.RegistrarSubmit()

        cy.FinalizaCadastroCheck()
    })








})