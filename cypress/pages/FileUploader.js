class FileUploader {

    header(){
        return cy.get('h3')
    }

    chooseFileButton(){
        return cy.get('#file-upload')
    }

    uploadButton(){
        return cy.get('#file-submit')
    }

    uploadedFile(){
        return cy.get('#uploaded-files')
    }

    errorMessage(){
        return cy.get('h1')
    }
}
export default FileUploader