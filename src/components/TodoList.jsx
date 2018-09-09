import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    console.log('TCL: -----------------------------');
    console.log('TCL: TodoList -> props', props);
    console.log('TCL: -----------------------------');
    return (
        <ul>
            {props.todos.map((todo) =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => props.toggleTodo(todo.id)}
                />
            )}
        </ul>
    );
};

export default TodoList;