class LoginPage {

    header(){
        return cy.get('h2')
    }

    usernameInput(){
        return cy.get('#username')
    }

    passwordInput(){
        return cy.get('#password')
    }

    loginButton(){
        return cy.get('.radius')
    }

    alertMessage(){
        return cy.get('[id="flash"]')
    }
}
export default LoginPage