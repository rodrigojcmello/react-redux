const contador = (state = { count: 0, nome: 'rodrigo' }, action) => {
    console.log('TCL: contador -> action', action);
    switch (action.type) {
        case 'AUMENTAR':
            return {
                ...state,
                count: action.número + state.count,
                pão: 'de queijo'
            };
        default:
            return state;
    }
};

export default contador;