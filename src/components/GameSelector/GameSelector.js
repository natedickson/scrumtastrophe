import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GameSelector.css';

const propTypes = {
    games: PropTypes.object.isRequired,
    onItemClick: PropTypes.func.isRequired
};

class GameSelector extends Component {

    render() {
        const items = this.props.games.map( function(game, i) {
            return (
                <li className="game-selector-item">
                    <span>{ game.name }</span>
                    <span>{ game.players }</span>
                    <button onClick={() => this.props.onItemClick()}>Join</button>
                </li>
            )
        });
        return (
            <div className="game-selector-container">
                <ul className="game-selector-list">
                    {items}
                </ul>
            </div>
        );
    }
};

GameSelector.propTypes = propTypes;
export default GameSelector;