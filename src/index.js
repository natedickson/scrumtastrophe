import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game/Game';
import store from './game/GameStore';
import loader from './game/Loader';
ReactDOM.render(<Game store={store} loader={loader}/>, document.getElementById('root'));
