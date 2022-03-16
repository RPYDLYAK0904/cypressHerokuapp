class Frames {

    header(){
        return cy.get('h3')
    }

    nestedFrames(){
        return cy.get('a').contains('Nested Frames')
    }

    iFrame(){
        return cy.get('a').contains('iFrame')
    }
}
export default Frames