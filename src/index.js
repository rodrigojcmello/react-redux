// React
import React from 'react';
import { render } from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
const store = createStore(rootReducer);

// Compoenentes
import TarefaEntrada from './containers/TarefaEntrada';
import Filtro from './components/Filtro';
import VisibleTodoList from './containers/VisibleTodoList';

render(
    <Provider store={store}>
        <>
            <TarefaEntrada />
            <Filtro />
            <VisibleTodoList />
        </>
    </Provider>,
    document.getElementById('root')
);