const selectors = require('../selectors/locators.js');

describe('Task List Actions & Validations', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Accepts new task input', () => {
        const typedText = 'New todo'
        cy
            .get(selectors.txtNewTodo)
            .focus()
            .type(typedText)
            .should('have.value', typedText)
    })

    it('Add batch of todos to list', () => {
        cy.fillTodoList()

        cy
            .get(selectors.todoList)
            .should('have.length', 4)
    })

    it('Deletes an item', () => {
        cy.fillTodoList()

        cy.get(selectors.todoList).as('list')

        cy
            .get('@list')
            .first()
            .find(selectors.distroyTask)
            .invoke('show')
            .click()

        cy.get('@list').should('have.length', 3)
    })


    it('Marks an item complete', () => {
        cy.fillTodoList()

        cy
            .get(selectors.todoList)
            .first()
            .as('first-todo')

        cy
            .get('@first-todo')
            .find(selectors.toggleTodoSatus)
            .as('checkbox')

        cy.get('@checkbox').click()

        cy.get('@checkbox').should('be.checked')

        cy.get('@first-todo').should('have.class', 'completed')

    })
})
