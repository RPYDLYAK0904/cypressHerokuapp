import DynamicContent from "../pages/DynamicContent"
import HomePage from "../pages/HomePage"

const dynamicContent = new DynamicContent()
const homePage = new HomePage()

describe("Dynamic Contentt validation", () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com')
      });

      it('User is able to see new text and image when page refresh', () => {
        homePage.dynamicContent().click()
        dynamicContent.header().should('be.visible').and('contain', 'Dynamic Content')

        dynamicContent.image_3().invoke('attr', 'src').then((src) => {
            dynamicContent.clickHere().click()
            dynamicContent.image_3().invoke('attr', 'src').should('not.eq', src)
        })

        dynamicContent.text_3().invoke('text').then((text_3) => {
            dynamicContent.clickHere().click()
            dynamicContent.text_3().should('not.have.text', text_3)
        })
      })
    })