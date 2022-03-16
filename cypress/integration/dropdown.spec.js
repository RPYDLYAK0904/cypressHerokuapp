import HomePage from "../pages/HomePage"
import Dropdown from "../pages/Dropdown"

const homePage = new HomePage()
const dropDown = new Dropdown()

describe("Dropdown Validation", () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com')
      });

      it('User is able select from dropdown', () => {
        homePage.dropdown().click()
        dropDown.header().should('be.visible').and('contain', 'Dropdown List')
        dropDown.dropDown().select('Option 1').should('have.value', '1')
        dropDown.dropDown().select('Option 2').should('have.value', '2')
      })    
    })