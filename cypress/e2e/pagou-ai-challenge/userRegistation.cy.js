describe('Registro e verificação na DB', () => {

    it('Deve registrar e verificar se é foi salvo na DB', () => {

      let randomEmail = `taciotest${Cypress._.random(1000, 9999)}@example.com`;
      let randomCelular = `2193333${Cypress._.random(1000, 9999)}`;

        cy.visit('http://localhost:5173/register')
        // Verifica se a pagina de Registrar foi carregada
        cy.contains('Nova conta').should('be.visible')
  
        cy.RegistroNome('Mario Augusto')
        cy.RegistroEmail(randomEmail)
        cy.RegistroCelular(randomCelular)
        cy.RegistroSenha('Algumasenhaai@123459')
        cy.RegistrarSubmit()

        cy.FinalizaCadastroCheck()
  
        cy.task('queryDatabase', { email: randomEmail }).then((queryResponse) => {
        
        cy.log('Query Response:', queryResponse);
  
        expect(queryResponse).to.not.be.null;

      });
    });
  });