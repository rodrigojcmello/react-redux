import React from 'react';

const Todo = (props) => (
    <li
        onClick={props.onClick}
        style={{
            textDecoration: props.completed ? 'line-through' : 'none'
        }}
    >
        <strong>{props.autor}:</strong> {props.text}
    </li>
);

export default Todo;