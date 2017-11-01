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
                    <tr>
                        <th>Game ID</th>
                        <th>Game Owner</th>
                        <th>Number of Players</th>
                    </tr>
                    {Items}
                    <td><button onClick={() => onSubmit(this.state.selected)}>Join</button></td>
                </table>
            </div>
        );
    }
};

GameSelector.propTypes = propTypes;
export default GameSelector;