import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import './Game.css';
import StartPage from '../pages/StartPage/StartPage';
import GamePage from '../pages/GamePage/GamePage';
import LoaderComponent from './LoaderComponent';
import GameHeader from '../components/GameHeader/GameHeader';

const propTypes = {
    gameStore: PropTypes.object,
    gameStateStore: PropTypes.object,
    loader: PropTypes.object
};

@observer
class Game extends Component {
    componentWillMount() {
        this.props.gameStore.getGames();
        this.props.gameStore.getAvailablePlayerRoles();
    }

    render() {
        const {gameStore, gameStateStore, loader} = this.props;
        return (
            <div className="game-container">
                {loader.visible ? (<LoaderComponent/>) : null}
                <div className="pages-container">
                    <GameHeader playerName={gameStore.currentPlayer.name} playerRole={gameStore.currentPlayer.role} playerId={gameStore.currentPlayer.id} gameId={gameStore.currentGame.id}/>
                    {!(gameStore.isInGame) ? (<StartPage gameStore={gameStore} loader={loader}/>) : null}
                    {gameStore.isInGame  ? (<GamePage gameStore={gameStore} gameState={gameStateStore} loader={loader}/>) : null}
                </div>
            </div>
        );
    }
}

Game.propTypes = propTypes;

export default Game