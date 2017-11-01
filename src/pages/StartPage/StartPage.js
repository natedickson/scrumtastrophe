import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import GameTitle from '../../components/GameTitle/GameTitle';
import MenuButton from '../../components/MenuButton/MenuButton';
import GameSelector from '../../components/GameSelector/GameSelector';
import './StartPage.css';
import PopUp from "../../components/PopUp/PopUp";
import PlayerSetter from "../../components/PlayerSetter/PlayerSetter";

const propTypes = {
    gameStore: PropTypes.object,
    loader: PropTypes.object
};

@observer
class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectingGame: false
        }
    }

    render() {
        return (
            <div className="start-page-container">
                {this.selectGameModal()}
                {this.setPlayerModal()}
                <GameTitle/>
                <MenuButton onClick={this.createGame} label="Create Game"/>
                <MenuButton onClick={this.selectGame} label="Join Game"/>
            </div>
        );
    }

    selectGameModal = () => {
        return this.state.selectingGame ? (
            <PopUp popupTitle="Join a Game" popupContent={() => {
                return (<GameSelector games={this.props.gameStore.games} onSubmit={this.joinGame}/>)
            }} onExit={this.selectGame} okayButton={false}/>
        ) : null;
    }

    setPlayerModal = () => {
        return this.props.gameStore.currentPlayer.name === '' ? (
            <PopUp popupTitle="Welcome" popupContent={() => {
                return (<PlayerSetter onSubmit={this.props.gameStore.getPlayer} availablePlayerRoles={this.props.gameStore.availablePlayerRoles}/>)
            }} onExit={() => {return null}} okayButton={false}/>
        ) : null;
    }

    selectGame = () => {
        const state = this.state;
        const currentState = state.selectingGame;
        state.selectingGame = !currentState;
        this.setState(state);
    }

    createGame = () => {
        this.props.gameStore.createGame();
    }

    joinGame = (gameId) => {
        this.props.gameStore.joinGame(gameId);
    }
}

StartPage.propTypes = propTypes;
export default StartPage;