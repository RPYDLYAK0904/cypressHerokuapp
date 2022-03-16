class DynamicContent {

    header(){
        return cy.get('h3')
    }

    image_3(){
        return cy.get('[class="large-2 columns"] img').eq(2)
    }

    text_3(){
        return cy.get('[class="large-10 columns"]').eq(2)
    }

    clickHere(){
        return cy.get('a').contains('click here')
    }
}
export default DynamicContent