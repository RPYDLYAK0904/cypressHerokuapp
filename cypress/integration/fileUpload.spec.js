import HomePage from "../pages/HomePage"
import FileUploader from '../pages/FileUploader'

const homePage = new HomePage()
const fileUploader = new FileUploader()

describe("File Uploader validation", () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com')
      });

      it('User is able to upload an image', () => {
        homePage.fileUpload().click()
        fileUploader.header().should('be.visible').and('contain', 'File Uploader')
        fileUploader.chooseFileButton().selectFile('cypress/fixtures/images/MountainGoat.jpeg')
        fileUploader.uploadButton().click()
        fileUploader.uploadedFile().contains('MountainGoat.jpeg')
      })    

      it('User sees the error when no file selected', () => {
        homePage.fileUpload().click()
        fileUploader.uploadButton().click()
        fileUploader.errorMessage().contains('Internal Server Error')
      })    
    })