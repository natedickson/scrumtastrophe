import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameInput extends Component {
    render() {
        return (
            <div className="single-input-component">
                <label>{this.props.inputLabel}</label>
                <input className="input" value={this.state.value}></input>
            </div>
        );
    }
}

NameInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    inputLabel: PropTypes.string.isRequired
}

export default NameInput;