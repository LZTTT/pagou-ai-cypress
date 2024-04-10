describe('Pagou.ai Challange Backend - Tacio', () => {
    
    // No proximo teste iremos verificar se o que foi cadastrado pelo usuario foi enviado corretamente para o backend.

    it('Checando se registro com sucesso', () => {

        let nome = "Moises Araujo"
        let email = "pagouai@teste.com"
        let celular = "21999222222"
        let password = "AlgumaSenhaai@1235937"

        cy.visit('http://localhost:5173/register')
        // Verifica se a pagina de Registrar foi carregada
        cy.contains('Nova conta').should('be.visible')
        
        cy.RegistroCompleto(nome, email, celular, password)

        cy.intercept('/user').as('registroRequest')

        cy.wait('@registroRequest').then(interception => {
            expect(interception.request.body).include({
                email: email,
                name: nome,
                password: password,
                phone: celular,
            })
        })
    })

    // No proximo testes iremos verificar se o que esta sendo enviado no login esta coerente com o as informacoes que foram dadas no form.

    it('Checando informacoes enviadas no Login', () => {

        let email = "pagouai@teste.com"
        let password = "AlgumaSenhaai@1235937"

        cy.visit('http://localhost:5173/login')
        // Verifica se a pagina de Login foi carregada
        cy.contains('Entrar').should('be.visible')

        cy.Login(email, password)

        cy.intercept('/user/auth').as('authRequest')

        cy.wait('@authRequest').then(interception => {
            expect(interception.request.body).include({
                email: email,
                password: password,
            })
        })

    })
    


})