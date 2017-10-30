import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
// import GameTitle from '../../components/GameTitle/GameTitle';
import MenuButton from '../../components/MenuButton/MenuButton';
import GameSelector from '../../components/GameSelector/GameSelector';
import GameCreator from '../../components/GameCreator/GameCreator';
import './StartPage.css';
import PopUp from "../../components/PopUp/PopUp";
import PlayerSetter from "../../components/PlayerSetter/PlayerSetter";

const propTypes = {
    store: PropTypes.object,
    loader: PropTypes.object
};

@observer
class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creatingGame: false,
            selectingGame: false
        }
    }

    render() {
        return (
            <div className="start-page-container">
                {this.createGameModal()}
                {this.selectGameModal()}
                {this.setPlayerModal()}
                <MenuButton onClick={this.createGame} label="Create Game"/>
                <MenuButton onClick={this.selectGame} label="Join Game"/>
            </div>
        );
    }

    createGameModal = () => {
        return this.state.creatingGame ? (
            <PopUp popupTitle="Create Game" popupContent={() => {
                return (<GameCreator onSubmit={this.createGameSubmit}/>)
            }} onExit={this.createGame} okayButton={false}/>
        ) : null;
    }

    selectGameModal = () => {
        return this.state.selectingGame ? (
            <GameSelector games={this.props.store.games} onItemClick={this.blankFunc}/>
        ) : null;
    }

    setPlayerModal = () => {
        return this.props.store.currentPlayer.name === '' ? (
            <PopUp popupTitle="Welcome" popupContent={() => {
                return (<PlayerSetter onSubmit={this.props.store.setPlayer}/>)
            }} onExit={this.blankFunc} okayButton={false}/>
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

    blankFunc = () => {
        alert('blank');
    }
}

StartPage.propTypes = propTypes;
export default StartPage;