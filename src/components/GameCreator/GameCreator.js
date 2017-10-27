import React, { Component } from 'react';
import NameInput from "../NameInput/NameInput";
import PropTypes from 'prop-types';
import './GameCreator.css';

const propTypes = {
    onNameChange: PropTypes.func.isRequired
};

class GameCreator extends Component {

    render() {
        return (
            <div className="game-creator-container">
                <div>Name Your Game</div>
                <NameInput onChange={this.props.onNameChange} inputLabel="Name"/>
            </div>
        );
    }
};

GameCreator.propTypes = propTypes;
export default GameCreator;