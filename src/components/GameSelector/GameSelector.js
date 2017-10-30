import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './GameSelector.css';

const propTypes = {
    games: PropTypes.object.isRequired,
    onItemClick: PropTypes.func.isRequired
};

class GameSelector extends Component {

    render() {
        const onItemClick = this.props.onItemClick;
        const items = this.props.games.map( function(game) {
            return (
                <li className="game-selector-item">
                    <span>{game.id}</span>
                    <button onClick={() => onItemClick(game.id)}>Join</button>
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