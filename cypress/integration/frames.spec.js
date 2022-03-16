import Frames from "../pages/frames/Frames"
import IFrame from "../pages/frames/IFrame"
import NestedFrames from "../pages/frames/NestedFrames"
import HomePage from "../pages/HomePage"

const frames = new Frames()
const iFrame = new IFrame()
const nestedFrames = new NestedFrames()
const homePage = new HomePage()

describe("Frames validation", () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com')
      });

      it('User is able to acces nested frames components', () => {
        homePage.frames().click()
        frames.nestedFrames().should('be.visible').and('contain', 'Nested Frames')
        frames.nestedFrames().click()
        cy.getIframeBody(nestedFrames.frame_top).then((frame) => {   
            cy.getIframeBody(frame.find(nestedFrames.frame_left)).should('contain', 'LEFT')
            cy.getIframeBody(frame.find(nestedFrames.frame_middle)).should('contain', 'MIDDLE')
            cy.getIframeBody(frame.find(nestedFrames.frame_right)).should('contain', 'RIGHT')
        })
        cy.getIframeBody(nestedFrames.frame_bottom).should('contain', 'BOTTOM')
      })

      it('User is able to acces iframe components', () => {
        homePage.frames().click()
        frames.header().should('be.visible').and('contain', 'Frames')
        frames.iFrame().should('be.visible').and('contain', 'iFrame')
        frames.iFrame().click()
        iFrame.header().should('be.visible').and('contain', 'An iFrame containing the TinyMCE WYSIWYG Editor')
        // getIFrameBody is custom command -> plugins/index.js
        cy.getIframeBody(iFrame.iframe).find('p').clear()
        cy.getIframeBody(iFrame.iframe).type('This is new content!')
        cy.getIframeBody(iFrame.iframe).find('p').should('contain', 'This is new content!')
      })
    })