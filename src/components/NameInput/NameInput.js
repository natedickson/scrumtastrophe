import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onChange: PropTypes.func.isRequired,
    inputLabel: PropTypes.string.isRequired
}

class NameInput extends Component {
    render() {
        return (
            <div className="single-input-component">
                <label>{this.props.inputLabel}
                    <input className="input" onChange={this.props.onChange}></input>
                </label>
            </div>
        );
    }
}

NameInput.propTypes = propTypes;

export default NameInput;