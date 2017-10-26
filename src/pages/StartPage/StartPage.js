import React, { Component } from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react';
import GameTitle from '../../components/GameTitle/GameTitle'
import MenuButton from "../../components/MenuButton/MenuButton";
import GameSelector from "../../components/GameSelector/GameSelector";

@inject('state')
@observer
export default class StartPage extends Component {
    render() {
        const createGameModal = this.state.creatingGame ? (
            <GameCreator/>
        ) : null;
        const selectGameModal = this.state.selectingGame ? (
            <GameSelector games={this.state.games} onItemClick={this.joinGame}/>
        ) : null;
        return (
            <div className="start-page-container">
                {createGameModal}
                {selectGameModal}
                <GameTitle/>
                <MenuButton onClick={} label="Create Game"/>
                <MenuButton onClick={} label="Join Game"/>
            </div>
        );
    }

    joinGame(gameId) {
        alert('joingame' + gameId);
    }
}