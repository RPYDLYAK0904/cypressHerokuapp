class AddRemoveElements {

    header(){
        return cy.get('h3')
    }

    addElementButton(){
        return cy.get('[onclick="addElement()"]')
    }

    deleteButton(){
        return cy.get('[onclick="deleteElement()"]')
    }
}
export default AddRemoveElements