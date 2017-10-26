import React, { Component } from 'react';
import NameInput from "../NameInput/NameInput";
// import PropTypes from 'prop-types';

// const propTypes = {
//     games: PropTypes.object.isRequired,
//     onItemClick: PropTypes.func.isRequired
// };

class GameCreator extends Component {

    render() {
        return (
            <div className="game-creator-container">
                <div>Name Your Game</div>
                <NameInput onSubmit={} inputLabel="Name"/>
            </div>
        );
    }
};

GameCreator.propTypes = propTypes;
export default GameCreator;