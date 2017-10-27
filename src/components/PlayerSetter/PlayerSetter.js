import React, { Component } from 'react';
import NameInput from "../NameInput/NameInput";
import PropTypes from 'prop-types';
import MenuButton from "../MenuButton/MenuButton";
import './PlayerSetter.css';

const propTypes = {
    onNameChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

class PlayerSetter extends Component {

    render() {
        return (
            <div className="player-setter-container">
                <div>Name Yourself</div>
                <NameInput onChange={this.props.onNameChange} inputLabel="Name"/>
                <MenuButton onClick={this.props.onSubmit} label="Enter"/>
            </div>
        );
    }
};

PlayerSetter.propTypes = propTypes;
export default PlayerSetter;