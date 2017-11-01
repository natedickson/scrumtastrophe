import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import './Game.css';
import StartPage from '../pages/StartPage/StartPage';
import GamePage from '../pages/GamePage/GamePage';
import LoaderComponent from './LoaderComponent';
import GameHeader from '../components/GameHeader/GameHeader';

const propTypes = {
    store: PropTypes.object,
    loader: PropTypes.object
};

@observer
class Game extends Component {
    componentWillMount() {
        this.props.store.getGames();
        this.props.store.getAvailablePlayerRoles();
    }

    render() {
        const {store, loader} = this.props;
        return (
            <div className="game-container">
                {loader.visible ? (<LoaderComponent/>) : null}
                <div className="pages-container">
                    <GameHeader playerName={store.currentPlayer.name} playerId={store.currentPlayer.id} gameId={store.currentGame.id}/>
                    {!(store.isInGame) ? (<StartPage store={this.props.store} loader={this.props.loader}/>) : null}
                    {store.isInGame  ? (<GamePage store={this.props.store} loader={this.props.loader}/>) : null}
                </div>
            </div>
        );
    }
}

Game.propTypes = propTypes;

export default Game