const selectors = require('../selectors/locators.js');
const todosArray = require('../fixtures/todos.json');
const mixedTodosArray = require('../fixtures/mixed_todos.json');

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

    seedData.forEach((todo, i) => {
        if (todo.isComplete) {
            cy
                .get(selectors.toggleTodoSatus).eq(i)
                .click()
        }
    })

})
