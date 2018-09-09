import React from 'react';
import { connect } from 'react-redux';
import { contador } from '../actions';

const Contador = ({ dispatch }) => {
    return (
        <div>
            <button onClick={() => {
                alert('ok');
            }}>
                contador
            </button>
            {/* <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input ref={node => input = node} />
                <button type="submit">
                    Add Todo
                </button>
            </form> */}
        </div>
    );
};

export default connect()(Contador);