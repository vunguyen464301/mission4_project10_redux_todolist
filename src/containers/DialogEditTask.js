import React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    AlertDialog,
    Input
} from 'react-onsenui';
import * as Actions from '../actions/index';
const DialogEditTask = ({isOpen, actions }) => {
    let input;
    const btn_edit = () => {
        const node = findDOMNode(input);
        if (node.value.length > 0) {
        //   actions.addLocationAndFetchWeather(node.value);
        console.log(node.value)
          node.value = '';
        };
      };
    return (
    
    )
}

const mapStateToProps = (state) => ({
    isOpen: state.dialog.open
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect((mapStateToProps, mapDispatchToProps))(DialogEditTask);

