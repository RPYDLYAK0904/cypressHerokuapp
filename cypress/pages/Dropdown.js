class Dropdown {

    header(){
        return cy.get('h3')
    }

    dropDown(){
        return cy.get('select')
    }
}
export default Dropdown