describe('Test index page', function() {
  it('Test navigation bar', function() {
    cy.visit('/index.html')

    // Check campaign on navigation
    cy.get('.navbar-nav').contains('Campaigns').click()
    cy.contains('Our Campaigns')
    // Check home on navigation
    cy.get('.navbar-nav').contains('Home').click()
    cy.contains('4 a better world')
    // Check About us on navigation
    cy.get('.navbar-nav').contains('About us').click()
    cy.contains('Who We Are')
    // Check Login on navigation
    cy.get('.navbar-nav').contains('Login').click()
    cy.get('.cancelLoginbtn').click( )
    // Check signup on navigation
    cy.get('.navbar-nav').contains('Sign up').click()
    cy.get('.cancelSignupbtn').click()
  })
})

describe('Test Login', function(){
  beforeEach(() => {
    cy.visit('index.html')
  })
  it('.type() - type valid username and  password', function() {
    cy.get('.navbar-nav').contains('Login').click()
    cy.get('.inputLoginEmail').type('ly@gmail.com').should('have.value', 'ly@gmail.com')
    cy.get('.inputLoginPwd').type('123456')
    cy.get('.signinbtn').click()
    cy.location('pathname').should('include', 'index1.html')

  })
  it('.type() - type invalid username and  password', function() {
    cy.get('.navbar-nav').contains('Login').click()
    cy.get('.inputLoginEmail').type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get('.inputLoginPwd').type('123')
    cy.get('.signinbtn').click()
    cy.contains('Error: There is no user record corresponding to this identifier. The user may have been deleted.')

  })

})

describe('Test Signup', function(){
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('.type() - type valid information', function() {
    cy.get('.navbar-nav').contains('Sign up').click()
    cy.get('.inputSignUpUserName').type('lyjidapa').should('have.value', 'lyjidapa')
    cy.get('.inputSingUpEmail').type('ji@gmail.com').should('have.value', 'ji@gmail.com')
    cy.get('.inputSignUpPwd').type('123456')
    cy.get('.signupbtn').click()
    cy.location('pathname').should('include', 'index1.html')

  })

  it('.type() - type existing email', function() {
    cy.get('.navbar-nav').contains('Sign up').click()
    cy.get('.inputSignUpUserName').type('lyjidapa').should('have.value', 'lyjidapa')
    cy.get('.inputSingUpEmail').type('ly@gmail.com').should('have.value', 'ly@gmail.com')
    cy.get('.inputSignUpPwd').type('123456')
    cy.get('.signupbtn').click()
    cy.contains('Error: The email address is already in use by another account.')
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
