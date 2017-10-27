import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import GameTitle from '../../components/GameTitle/GameTitle'
import MenuButton from '../../components/MenuButton/MenuButton';
import GameSelector from '../../components/GameSelector/GameSelector';
import GameCreator from '../../components/GameCreator/GameCreator';
import './StartPage.css';
import PopUp from "../../components/PopUp/PopUp";

const propTypes = {
    store: PropTypes.object
};

@observer
class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creatingGame: false,
            selectingGame: false,
            playerName: '',
            gameName: '',
        }
    }

    render() {
        return (
            <div className="start-page-container">
                {this.createGameModal()}
                {this.selectGameModal()}
                <GameTitle/>
                <MenuButton onClick={this.createGame} label="Create Game"/>
                <MenuButton onClick={this.selectGame} label="Join Game"/>
            </div>
        );
    }

    createGameModal = () => {
        return this.state.creatingGame ? (
            <PopUp popupTitle="Create Game" popupContent={() => {
                return (<GameCreator onNameChange={this.changeGameName}/>)
            }} onExit={this.createGame} okayButton={false}/>
        ) : null;
    }

    selectGameModal = () => {
        return this.state.selectingGame ? (
            <GameSelector games={this.props.store.games} onItemClick={this.blankFunc}/>
        ) : null;
    }

    selectGame = () => {
        const state = this.state;
        const currentState = state.selectingGame;
        state.selectingGame = !currentState;
        this.setState(state);
    }

    createGame = () => {
        const state = this.state;
        const currentState = state.creatingGame;
        state.creatingGame = !currentState;
        this.setState(state);
    }

    changePlayerName = (e) => {
        const state = this.state;
        state.playerName = e.target.value;
        this.setState(state);
    }

    changeGameName = (e) => {
        const state = this.state;
        state.gameName = e.target.value;
        this.setState(state);
    }

    blankFunc = () => {
        alert('blank');
    }
}

StartPage.propTypes = propTypes;
export default StartPage;