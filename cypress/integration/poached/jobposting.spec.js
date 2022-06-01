/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Job panel",function() {   
it("Poster post a Job", function () {

console.log(Cypress.env);
console.log(`Cypress.env`);
//Visit the URL
cy.visit(Cypress.env('URL'))
cy.wait(10000)

//click login
cy.xpath("/html/body/div[1]/div[1]/div/div/div[4]/main/section/div/form/div[3]/div/button").click({force: true})
cy.wait(4000)

//Enter email
cy.xpath("/html/body/div[1]/div[1]/div/div/div[4]/main/section/div/form/div[2]/div/div/input").type(Cypress.env('EMAIL'));        
cy.wait(8000)

//Click next button
cy.xpath("/html/body/div[1]/div[1]/div/div/div[4]/main/section/div/form/div[3]/div/button").click()
cy.wait(8000)

//Enter password
cy.xpath("/html/body/div[1]/div[1]/div/div/div[4]/main/section/div/form/div[2]/div/div/input[2]").type(Cypress.env('PASSWORD'));

//Login button click
cy.xpath("/html/body/div[1]/div[1]/div/div/div[4]/main/section/div/form/div[3]/div/button").click()
cy.wait(15000)

//Assert - Post a Job button in jobs panel
cy.contains("Post a Job").should("be.visible")



    })
})
