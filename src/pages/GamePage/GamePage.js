import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import PlayerList from '../../components/PlayerList/PlayerList';

const propTypes = {
    store: PropTypes.object,
    loader: PropTypes.object
}

@observer
class GamePage extends Component{
    render() {
        const players = this.props.store.currentGame.players;
        return (
            <div className="game-page-container">
                <div className="top-half">
                    <div className="game-board-container">GameBoard</div>
                    <PlayerList players={players}/>
                </div>
                <div className="bottom-half">
                    <div className="game-actions-container">Actions</div>
                </div>
            </div>
        )
    }
}

GamePage.propTypes = propTypes;
export default GamePage;