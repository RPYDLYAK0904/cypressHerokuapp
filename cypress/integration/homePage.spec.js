import HomePage from "../pages/HomePage"

const homePage = new HomePage()

describe("Home Page Validation", () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com')
      });

      it('User is able to see home page components', () => {
        homePage.upperHeader().should('be.visible').and('contain', 'Welcome to the-internet')
        homePage.lowerHeader().should('be.visible').and('contain', 'Available Examples')
        cy.fixture('homePage').then(data => {
          const examples = data.examples
          homePage.examplesList().then((examplesList) => {
            for (var i = 0; i < examplesList.length-1; i++) {
                expect(examplesList.eq(i).text()).to.eq(examples[i])
            } 
          })
        })
      })    
    })