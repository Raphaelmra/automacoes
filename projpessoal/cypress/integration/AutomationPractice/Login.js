

/// <reference types="cypress" />



describe('example scenarios', () => {
    beforeEach(() => {

        cy.visit('http://automationpractice.com/')
    })

    it('does login succesfully', () => {
        cy.get(".login").click()
        cy.get("#email").type("lijegi2541@cebaike.com")
        cy.get("#passwd").type("teste.123")
        cy.get("#SubmitLogin").click()

    })


})

