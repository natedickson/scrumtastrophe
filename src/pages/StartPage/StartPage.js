import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import GameTitle from '../../components/GameTitle/GameTitle'
import MenuButton from "../../components/MenuButton/MenuButton";
import GameSelector from "../../components/GameSelector/GameSelector";
import GameCreator from '../../components/GameCreator/GameCreator';
import './StartPage.css';

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
        const createGameModal = this.state.creatingGame ? (
            <GameCreator onNameChange={this.changeGameName}/>
        ) : null;
        const selectGameModal = this.state.selectingGame ? (
            <GameSelector games={this.props.store.games} onItemClick={this.joinGame}/>
        ) : null;
        return (
            <div className="start-page-container">
                {createGameModal}
                {selectGameModal}
                <GameTitle/>
                <MenuButton onClick={this.createGame} label="Create Game"/>
                <MenuButton onClick={this.selectGame} label="Join Game"/>
            </div>
        );
    }

    selectGame = () => {
        alert('select');
        // const state = this.state;
        // state.selectingGame = true;
        // this.setState(state);
    }

    createGame = () => {
        alert('create');
        // const state = this.state;
        // state.creatingGame = true;
        // this.setState(state);
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
}

StartPage.propTypes = propTypes;
export default StartPage;