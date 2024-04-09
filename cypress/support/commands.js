Cypress.Commands.add('RegistrarSubmit', () => {
    cy.get('.button').click()
})

Cypress.Commands.add('RegistroNome', ($nome) => {
    cy.get(':nth-child(1) > .container-input > .form-control').type($nome)
})

Cypress.Commands.add('RegistroEmail', ($email) => {
    cy.get(':nth-child(2) > .container-input > .form-control').type($email)
})

Cypress.Commands.add('RegistroCelular', ($celular) => {
    cy.get(':nth-child(3) > .container-input > .form-control').type($celular)
})

Cypress.Commands.add('RegistroSenha', ($senha) => {
    cy.get(':nth-child(4) > .container-input > .form-control').type($senha)
})
