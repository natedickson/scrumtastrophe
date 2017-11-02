import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './GameSelector.css';

const propTypes = {
    games: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
};

class GameSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    render() {
        const onSubmit = this.props.onSubmit;
        const selectedGameId = this.state.selected;
        const Items = this.props.games.map((game, index) => {
            return (
                <tr key={game.id} className="game-selector-item" tabIndex={index} onClick={() => this.setState({selected:game.id})}>
                    <td>{game.id}</td>
                    <td>{game.owner.name}</td>
                    <td>{(game.players).length}</td>
                </tr>
            )       
        });
        return (
            <div className="game-selector-container">
                <table>
                    <thead>
                        <tr>
                            <th>Game ID</th>
                            <th>Game Owner</th>
                            <th>Number of Players</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Items}
                    </tbody>
                </table>
                <button onClick={() => onSubmit(selectedGameId)}>Join Selected Game</button>
            </div>
        );
    }
};

GameSelector.propTypes = propTypes;
export default GameSelector;