describe('Pagou.ai Challange - Tacio', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:5173/register')
        // Verifica se a pagina de Registrar foi carregada
        cy.contains('Nova conta').should('be.visible')
      })

    
    it('Fazendo registro completo com usuario e verificando pagina de Finalizar Cadastro', () => {
        cy.RegistroNome('Tacio Zava')
        cy.RegistroEmail('tacio@teste.com')
        cy.RegistroCelular('21999999999')
        cy.RegistroSenha('Algumasenhaai@123459')
        cy.RegistrarSubmit()

        cy.FinalizaCadastroCheck()
    })








})