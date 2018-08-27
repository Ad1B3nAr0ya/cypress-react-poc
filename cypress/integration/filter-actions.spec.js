const selectors = require('../selectors/locators.js')

describe('Filters & Footer Counter Validations', () => {

    beforeEach(() => {
        cy.seedAndVisit()
    })


    it('Filters todos', () => {
        const filters = [
            {link: 'Active', expectedLength: 2},
            {link: 'Completed', expectedLength: 2},
            {link: 'All', expectedLength: 4}
        ]

        cy.fillMixedTodoList()


        cy.wrap(filters).each(filter => {
            cy.contains(filter.link)
                .click()
                .get(selectors.todoList).should('have.length', filter.expectedLength)
                .get(selectors.todoCount).should('have.text', filters[0].expectedLength.toString())

        })
    })
})
