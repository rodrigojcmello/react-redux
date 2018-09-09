const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    autor: action.autor,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((todo) =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        case 'CONTADOR':
            return {
                contador: action.contador
            };
        default:
            return state;
    }
};

export default todos;