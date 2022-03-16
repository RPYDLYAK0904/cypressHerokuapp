import AddRemoveElements from "../pages/AddRemoveElements"
import HomePage from "../pages/HomePage";

const addRemoveElements = new AddRemoveElements()
const homePage = new HomePage()

describe("Add/Remove Element validation", () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com')
      });

      it('User is able to add and delet element', () => {
        homePage.addRemoveElements().click()
        addRemoveElements.header().should('be.visible').and('contain', 'Add/Remove Elements')
        addRemoveElements.addElementButton().should('be.visible').and('contain', 'Add Element')
        addRemoveElements.addElementButton().click().then(() => {
            addRemoveElements.deleteButton().should('be.visible').and('contain', 'Delete')
        })
        addRemoveElements.deleteButton().click().then(() => {
            addRemoveElements.deleteButton().should('not.exist')
        })
      })
    })