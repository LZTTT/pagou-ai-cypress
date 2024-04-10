describe('Pagou.ai Challange Backend Registro - Tacio', () => {
    
    // No proximo teste iremos verificar se o que foi cadastrado pelo usuario foi enviado corretamente para o backend.

    it('Checando informações enviadas no registro', () => {

        cy.task('deleteEmailDatabase')

        let nome = "Moises Araujo"
        let email = "pagouai@teste.com"
        let celular = "21999222222"
        let password = "AlgumaSenhaai@1235937"

        cy.visit('http://localhost:5173/register')
        // Verifica se a pagina de Registrar foi carregada
        cy.contains('Nova conta').should('be.visible')
        
        cy.RegistroCompleto(nome, email, celular, password)

        cy.intercept('**/user').as('registroRequest')

        cy.wait('@registroRequest').then(interception => {
            expect(interception.request.body).include({
                email: email,
                name: nome,
                password: password,
                phone: celular,
            })
        })
    })
})