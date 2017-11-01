import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game/Game';
import gameStore from './game/GameStore';
import gameStateStore from './game/GameStateStore';
import loader from './game/Loader';
ReactDOM.render(<Game gameStore={gameStore} gameStateStore={gameStateStore} loader={loader}/>, document.getElementById('root'));
