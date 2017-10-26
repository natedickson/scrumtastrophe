import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game/Game';
import store from './stores/GameStore';
ReactDOM.render(<Game store={store} />, document.getElementById('root'));
