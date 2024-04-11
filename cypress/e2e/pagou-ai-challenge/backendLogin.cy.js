describe('Pagou.ai Challange Backend Registro - Tacio', () => {

    // No proximo testes iremos verificar se o que esta sendo enviado no login esta coerente com o as informacoes que foram dadas no form.

    it('Checando informacoes enviadas no Login', () => {

        cy.clearCookies()

        let email = "pagouai@teste.com"
        let password = "AlgumaSenhaai@1235937"

        cy.visit('http://localhost:5173/login')
        // Verifica se a pagina de Login foi carregada
        cy.contains('Entrar').should('be.visible')

        cy.Login(email, password)

        cy.intercept('**/user/auth').as('authRequest')

        cy.wait(1000)

        cy.wait('@authRequest').then(interception => {
            expect(interception.request.body).include({
                email: email,
                password: password,
            })
        })

    })
    


})