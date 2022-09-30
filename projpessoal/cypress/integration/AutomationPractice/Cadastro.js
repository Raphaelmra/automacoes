/// <reference types="cypress" />



describe('example to-do app', () => {
    beforeEach(() => {

        cy.visit('http://automationpractice.com/')
    })

    it('displays two todo items by default', () => {
        cy.get(".login").click()
        cy.get('#email_create').type("emailtestemathias@teste.com.br")
        cy.get('#SubmitCreate > span').click()
        cy.wait(2000)
        cy.get('#id_gender1').check()
        cy.get('#customer_firstname').type("Raphael")
        cy.get('#customer_lastname').type("Mathias")
        cy.get('#passwd').type("teste.123")
        cy.get('#days').select("22")
        cy.get('#months').select("2")
        cy.get('#years').select("2002")
        cy.get('#firstname').type("Raphael")
        cy.get('#id_state').select("2")
        cy.get('#lastname').type("Mathias")
        cy.get('#address1').type("Rua a")
        cy.get('#address2').type("casa 2")
        cy.get('#city').type("Alabama")
        cy.get('#postcode').type("89115")

        cy.get('#phone').type("21971668476")
        cy.get('#phone').type("21971668476")
        cy.get('#alias').type("Endereco teste")
        cy.get('#submitAccount > span').click()
    })


})