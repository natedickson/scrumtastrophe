import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onChange: PropTypes.func.isRequired,
    inputLabel: PropTypes.string.isRequired
}

class NameInput extends Component {
    render() {
        return (
            <div className="single-input-component">
                <label>{this.props.inputLabel}</label>
                <input className="input" onChange={(e) => this.props.onChange(e)}></input>
            </div>
        );
    }
}

NameInput.propTypes = propTypes;

export default NameInput;