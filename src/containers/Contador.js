import React from 'react';
import { connect } from 'react-redux';
import { aumentar } from '../actions';
import { bindActionCreators } from 'redux';

const Contador = (props) => {
    console.log('contador', props);
    return (
        <div>
            <button onClick={() => props.aumentar(5)}>
                contador
            </button>
            <span>{props.contador.count}</span>
        </div>
    );
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ aumentar }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Contador);