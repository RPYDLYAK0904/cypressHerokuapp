import LoginPage from "../pages/LoginPage"

const loginPage = new LoginPage()

describe("Login page Validation", () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
      });

      it('User is able to see login page components', () => {
        loginPage.header().should('be.visible').and('contain', 'Login Page')
        loginPage.usernameInput().should('be.visible')
        loginPage.passwordInput().should('be.visible')
        loginPage.loginButton().should('be.visible')
      })

      it('User is able to login with valid username and password', () => {
        loginPage.usernameInput().type('tomsmith')
        loginPage.passwordInput().type('SuperSecretPassword!')
        loginPage.loginButton().click()
        loginPage.alertMessage().should('be.visible').and('contain', 'You logged into a secure area!')
      })

      it('User is not able to login with invalid password', () => {
        loginPage.usernameInput().type('tomsmith')
        loginPage.passwordInput().type('Super')
        loginPage.loginButton().click()
        loginPage.alertMessage().should('be.visible').and('contain', 'Your password is invalid!')
      })

      it('User is not able to login with invalid username', () => {
        loginPage.usernameInput().type('super')
        loginPage.passwordInput().type('Super')
        loginPage.loginButton().click()
        loginPage.alertMessage().should('be.visible').and('contain', 'Your username is invalid!')
      })
    })
  
      