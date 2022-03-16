class HomePage {

    upperHeader(){
        return cy.get('h1')
    }

    lowerHeader(){
        return cy.get('h2')
    }

    examplesList(){
        return cy.get('[id="content"] a')
    }

    addRemoveElements(){
        return cy.get('a').contains('Add/Remove Elements')
    }

    dropdown(){
        return cy.get('a').contains('Dropdown')
    }

    dynamicContent(){
        return cy.get('a').contains('Dynamic Content')
    }

    frames(){
        return cy.get('a').contains('Frames')
    }

    fileUpload(){
        return cy.get('a').contains('File Upload')
    }
}
export default HomePage