import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import PlayerList from '../../components/PlayerList/PlayerList';
import ChatBox from '../../components/ChatBox/ChatBox';
import './GamePage.css';
import GameBoard from '../../components/GameBoard/GameBoard';
import PlayerActions from '../../components/PlayerActions/PlayerActions';
import ToastContainer from '../../util/toast/ToastContainer';
import toast from '../../util/toast/Toast';

const propTypes = {
    gameState: PropTypes.object,
    gameId: PropTypes.number,
    playerId: PropTypes.number
}

@observer
class GamePage extends Component{
    componentWillMount() {
        this.props.gameState.initialize(this.props.gameId, this.props.playerId);
    }
    render() {
        const gameState = this.props.gameState;
        const players = gameState.playerSummaries;
        const chatLog = gameState.chatLog;
        const stories = gameState.sprintStories;
        const actions = gameState.availableActions;
        return (
            <div className="game-page-container">
                <ToastContainer toast={toast}/>
                <span className="left-container">
                    <GameBoard sprintStories={stories} storyClick={gameState.targetStory}/>
                    <PlayerActions availableActions={actions} actionCallback={gameState.doAction}/>
                </span>
                <span className="right-container">
                    <PlayerList players={players}/>
                    <ChatBox chatLog={chatLog} sendMessage={gameState.sendMessage}/>
                </span>
            </div>
        )
    }
}

GamePage.propTypes = propTypes;
export default GamePage;