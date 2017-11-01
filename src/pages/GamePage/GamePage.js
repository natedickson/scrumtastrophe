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
    componentDidMount() {
        this.gameState.initialize(this.props.gameStore.currentGame.gameState);
    }
    render() {
        const players = this.props.gameStore.currentGame.players;
        return (
            <div className="game-page-container">
                <div className="top-half">
                    <div className="game-board-container">GameBoard</div>
                    <PlayerList players={players}/>
                </div>
                <div className="bottom-half">
                    <div className="game-actions-container">Actions</div>
                </div>
            </div>
        )
    }
}

GamePage.propTypes = propTypes;
export default GamePage;