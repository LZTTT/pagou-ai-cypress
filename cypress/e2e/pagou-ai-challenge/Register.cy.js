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

    it('Verifica aviso de senha obrigatória', () => {
        cy.RegistrarSubmit()
        cy.contains('Senha é obrigatória').should('be.visible')
    }) 

    it('Verifica aviso de nome inválido', () => {
        cy.RegistroNome('Tacio')
        cy.RegistroEmail('tacio@teste.com')
        cy.RegistroCelular('21999999999')
        cy.RegistroSenha('Algumasenhaai@123459')
        cy.RegistrarSubmit()
        cy.contains('Nome Completo é inválido').should('be.visible')
    })

    it('Verifica se nao deixa cadastrar com celular incorreto', () => {
        cy.RegistroNome('Tacio Zava')
        cy.RegistroEmail('tacio@teste.com')
        cy.RegistroCelular('1')
        cy.RegistroSenha('Algumasenhaai@123459')
        cy.RegistrarSubmit()
        cy.contains('Celular/Whatsapp é inválido').should('be.visible')
    })

    it('Verifica se nao deixa cadastrar com e-mail incorreto', () => {
        cy.RegistroNome('Tacio Zava')
        cy.RegistroEmail('blabla')
        cy.RegistroCelular('21999999999')
        cy.RegistroSenha('Algumasenhaai@123459')
        cy.RegistrarSubmit()
        cy.contains('E-mail é inválido').should('be.visible')
    })

    it('Verifica se requisitos para senha esta correto - Menos de 8 caracteres', () => {
        cy.RegistroNome('Tacio Zava')
        cy.RegistroEmail('tacio@teste.com')
        cy.RegistroCelular('21999999999')
        cy.RegistroSenha('Alguma@1')
        cy.RegistrarSubmit()
        cy.contains('Senha é inválida').should('be.visible')
    })

    it('Verifica se requisitos para senha esta correto - Sem letra maiuscula', () => {
        cy.RegistroNome('Tacio Zava')
        cy.RegistroEmail('tacio@teste.com')
        cy.RegistroCelular('21999999999')
        cy.RegistroSenha('algumasenha!@3341324')
        cy.RegistrarSubmit()
        cy.contains('Senha é inválida').should('be.visible')
    })

    it('Verifica se requisitos para senha esta correto - Sem letra minuscula', () => {
        cy.RegistroNome('Tacio Zava')
        cy.RegistroEmail('tacio@teste.com')
        cy.RegistroCelular('21999999999')
        cy.RegistroSenha('ALGUMASENHA!@3341324')
        cy.RegistrarSubmit()
        cy.contains('Senha é inválida').should('be.visible')
    })

    it('Verifica se requisitos para senha esta correto - Sem caracter especial', () => {
        cy.RegistroNome('Tacio Zava')
        cy.RegistroEmail('tacio@teste.com')
        cy.RegistroCelular('21999999999')
        cy.RegistroSenha('AlgumaSenha323341324')
        cy.RegistrarSubmit()
        cy.contains('Senha é inválida').should('be.visible')
    })

    it('Verifica se requisitos para senha esta correto - Sem numerico', () => {
        cy.RegistroNome('Tacio Zava')
        cy.RegistroEmail('tacio@teste.com')
        cy.RegistroCelular('21999999999')
        cy.RegistroSenha('AlgumaSenha!@!@!@!@@')
        cy.RegistrarSubmit()
        cy.contains('Senha é inválida').should('be.visible')
    })

    it('Verifica se requisitos para senha esta correto - Senha correta', () => {
        cy.RegistroNome('Tacio Zava')
        cy.RegistroEmail('tacio@teste.com')
        cy.RegistroCelular('21999999999')
        cy.RegistroSenha('Alguma@1')
        cy.RegistrarSubmit()
        cy.contains('Senha é inválida').should('not.exist')
    })
      


})
