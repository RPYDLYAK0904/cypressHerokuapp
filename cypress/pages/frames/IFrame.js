class IFrame {

    header(){
        return cy.get('h3')
    }

    get iframe(){
        return 'iframe[id="mce_0_ifr"]'
    }
}
export default IFrame