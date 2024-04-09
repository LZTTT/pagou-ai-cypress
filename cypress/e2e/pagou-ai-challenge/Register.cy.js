describe('Pagou.ai Challange - Tacio', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:5173/register')
        // Verifica se a pagina de Registrar foi carregada
        cy.contains('Nova conta').should('be.visible')
      })

    it('Verifica aviso de Nome obrigatorio', () => {
        cy.RegistrarSubmit()
        cy.contains('Nome completo é obrigatório').should('be.visible')
    })  

    it('Verifica aviso de E-mail obrigatorio', () => {
        cy.RegistrarSubmit()
        cy.contains('E-mail é obrigatório').should('be.visible')
    })

    it('Verifica aviso de Celular/Whatsapp obrigatorio', () => {
        cy.RegistrarSubmit()
        cy.contains('Celular/Whatsapp é obrigatório').should('be.visible')
    })  

    it('Verifica aviso de Celular/Whatsapp obrigatorio', () => {
        cy.RegistrarSubmit()
        cy.contains('Senha é inválida').should('be.visible')
    }) 

    it('Verifica se nao deixa cadastrar com celular incorreto', () => {
        cy.Nome('Tacio Zava')
        cy.Email('tacio@teste.com')
        cy.Celular('1')
        cy.Senha('Algumasenhaai@123459')
        cy.RegistrarSubmit()
        cy.contains('Algo de errado aconteceu').should('be.visible')
    })

    it('Verifica se nao deixa cadastrar com e-mail incorreto', () => {
        cy.Nome('Tacio Zava')
        cy.Email('blabla')
        cy.Celular('21999999999')
        cy.Senha('Algumasenhaai@123459')
        cy.RegistrarSubmit()
        cy.contains('Algo de errado aconteceu').should('be.visible')
    })

    it('Verifica se requisitos para senha esta correto', () => {
        cy.Nome('Tacio Zava')
        cy.Email('tacio@teste.com')
        cy.Celular('21999999999')
        cy.Senha('Alguma@1')
        cy.RegistrarSubmit()
        cy.contains('Algo de errado aconteceu').should('be.visible')
    })


    


})
