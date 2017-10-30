import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import './Game.css';
import StartPage from '../pages/StartPage/StartPage';
import GameLobbyPage from '../pages/GameLobbyPage/GameLobbyPage';
import LoaderComponent from './LoaderComponent';
import GameHeader from '../components/GameHeader/GameHeader';

const propTypes = {
    store: PropTypes.object,
    loader: PropTypes.object
};

@observer
class Game extends Component {
    componentDidMount() {
        this.props.store.getGames();
    }
    render() {
        const {store, loader} = this.props;
        return (
            <div className="game-container">
                {loader.visible ? (<LoaderComponent/>) : null}
                <GameHeader playerName={store.currentPlayer.name} playerId={store.currentPlayer.id} gameId={store.currentGame.id}/>
                <StartPage store={this.props.store} loader={this.props.loader}/>
                <GameLobbyPage store={this.props.store} loader={this.props.loader}/>
            </div>
        );
    }
}

Game.propTypes = propTypes;

export default Game