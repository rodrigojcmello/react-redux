import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Filtro = () => (
    <div>
        <span>Exibir: </span>
        <FilterLink filtro={VisibilityFilters.SHOW_ALL}>
            Todas
        </FilterLink>
        <FilterLink filtro={VisibilityFilters.SHOW_ACTIVE}>
            Ativas
        </FilterLink>
        <FilterLink filtro={VisibilityFilters.SHOW_COMPLETED}>
            Concluídas
        </FilterLink>
    </div>
);

export default Filtro;