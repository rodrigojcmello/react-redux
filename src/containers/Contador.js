import React from 'react';
import { connect } from 'react-redux';
import { aumentar } from '../actions';

const Contador = (props) => {
    console.log('contador', props);
    return (
        <div>
            <button onClick={props.aumentar}>
                contador
            </button>
            <span>{props.contador}</span>
        </div>
    );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    aumentar: () => dispatch(aumentar(10))
});

// const mapDispatchToProps = (dispatch) => bindActionCreators({ aumentar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contador);