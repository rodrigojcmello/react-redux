import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TarefaEntrada extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            entrada: ''
        };
    }
    definirEntrada = (e) => {
        this.setState({ entrada: e.target.value });
    }
    adicionarTarefa = (e) => {
        e.preventDefault();
        if (!this.state.entrada.trim()) {
            return;
        }
        this.props.dispatch(addTodo('Rodrigo', this.state.entrada));
        this.setState({ entrada: '' });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.adicionarTarefa}>
                    <input value={this.state.entrada} onChange={this.definirEntrada} />
                    <button type='submit'>
                        Adicionar
                    </button>
                </form>
            </div>
        );
    }

}

export default connect()(TarefaEntrada);