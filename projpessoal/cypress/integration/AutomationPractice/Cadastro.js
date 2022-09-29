/// <reference types="cypress" />



describe('example to-do app', () => {
    beforeEach(() => {

        cy.visit('https://www.amazon.com.br/')
    })

    it('displays two todo items by default', () => {
        cy.get("#nav-link-accountList-nav-line-1").click()
        cy.get("#createAccountSubmit").click()
        cy.get('#ap_customer_name').type("Raphael")
        cy.get('#ap_email').type("rognomemle@vusra.com")
        cy.get('#ap_password').type("teste.123")
        cy.get('#ap_password_check').type("teste.123")
        cy.get('#continue').click()
    })


})