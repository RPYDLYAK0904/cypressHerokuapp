import HomePage from "../pages/HomePage"

const homePage = new HomePage()

const examples = [
  "A/B Testing", "Add/Remove Elements", "Basic Auth", "Broken Images", "Challenging DOM", "Checkboxes", "Context Menu", "Digest Authentication",
  "Disappearing Elements", "Drag and Drop", "Dropdown", "Dynamic Content", "Dynamic Controls", "Dynamic Loading", "Entry Ad", "Exit Intent", "File Download", "File Upload",
  "Floating Menu", "Forgot Password", "Form Authentication", "Frames", "Geolocation", "Horizontal Slider", "Hovers", "Infinite Scroll", "Inputs", "JQuery UI Menus",
  "JavaScript Alerts", "JavaScript onload event error", "Key Presses", "Large & Deep DOM", "Multiple Windows", "Nested Frames", "Notification Messages", "Redirect Link",
  "Secure File Download", "Shadow DOM", "Shifting Content", "Slow Resources", "Sortable Data Tables", "Status Codes", "Typos", "WYSIWYG Editor"
]

describe("Home Page Validation", () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com')
      });

      it('User is able to see home page components', () => {
        homePage.upperHeader().should('be.visible').and('contain', 'Welcome to the-internet')
        homePage.lowerHeader().should('be.visible').and('contain', 'Available Examples')
        homePage.examplesList().then((examplesList) => {
            for (var i = 0; i < examplesList.length-1; i++) {
                expect(examplesList.eq(i).text()).to.eq(examples[i])
            } 
        })
      })    
    })