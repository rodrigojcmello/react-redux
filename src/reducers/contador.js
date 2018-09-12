const contador = (state = 0, action) => {
    console.log('TCL: contador -> action', action);
    switch (action.type) {
        case 'AUMENTAR':
            return action.número + state;
        case 'DIMINUIR':
            return action.contador;
        default:
            return state;
    }
};

export default contador;