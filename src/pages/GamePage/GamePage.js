import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import PlayerList from '../../components/PlayerList/PlayerList';
import './GamePage.css';

const propTypes = {
    gameStore: PropTypes.object,
    gameState: PropTypes.object,
    loader: PropTypes.object
}

@observer
class GamePage extends Component{
    componentWillMount() {
        this.props.gameState.initialize(this.props.gameStore.currentGame.id, this.props.gameStore.playerId);
    }
    render() {
        const gameState = this.props.gameState;
        const players = gameState.playerSummaries;
        return (
            <div className="game-page-container">
                <span className="left-container">
                    <div className="game-board">GameBoard</div>
                    <div className="game-actions">Actions</div>
                </span>
                <span className="right-container">
                    <PlayerList players={players}/>
                    <div className="game-chat">Chat Box</div>
                </span>
            </div>
        )
    }
}

GamePage.propTypes = propTypes;
export default GamePage;