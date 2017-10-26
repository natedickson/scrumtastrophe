import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    games: PropTypes.object.isRequired,
    onItemClick: PropTypes.func.isRequired
};

class GameSelector extends Component {

    render() {
        const items = this.props.games.map( function(game, i) {
            return (
                <li className="game-selector-item" onClick={this.props.onItemClick}>
                    <span>{ game.name }</span>
                    <span>{ game.players }</span>
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