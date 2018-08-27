const selectors = require('../selectors/locators.js');
const todosArray = require('../fixtures/todos.json');
const mixedTodosArray = require('../fixtures/mixed_todos.json');


Cypress.Commands.add('seedAndVisit', (seedData = 'fixture:todos') => {
    cy.visit('/')

})

Cypress.Commands.add('fillTodoList', (seedData = todosArray) => {

    seedData.forEach(todo => {
        cy
            .get(selectors.txtNewTodo)
            .type(todo.name)
            .type('{enter}')
    })

})

Cypress.Commands.add('fillMixedTodoList', (seedData = mixedTodosArray) => {

    seedData.forEach(todo => {
        cy
            .get(selectors.txtNewTodo)
            .type(todo.name)
            .type('{enter}')
    })

    var i = 0
    seedData.forEach(todo => {
        if (todo.isComplete) {
            cy
                .get(selectors.toggleTodoSatus).eq(i)
                .click()
        }
        i++;
    })

})
