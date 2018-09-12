import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import contador from './contador';

export default combineReducers({
    todos,
    visibilityFilter,
    contador
});