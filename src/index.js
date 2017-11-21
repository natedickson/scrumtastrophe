import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game/Game';
import gameStore from './game/GameLobbyStore';
import gameStateStore from './game/GameStateStore';
import spinner from './util/spinner/Spinner';
ReactDOM.render(<Game gameStore={gameStore} gameStateStore={gameStateStore} spinner={spinner}/>, document.getElementById('root'));
