let nextTodoId = 0;
export const addTodo = (autor, text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    autor,
    text
});

let c = 0;
export const contador = () => ({
    type: 'CONTADOR',
    contador: c++
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};