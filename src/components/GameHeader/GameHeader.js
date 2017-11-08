import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import DataWidget from '../DataWidget/DataWidget';
import './GameHeader.css';

const propTypes = {
    playerName: PropTypes.string,
    playerRole: PropTypes.string,
    playerId: PropTypes.number,
    gameId: PropTypes.number
};

@observer
class GameHeader extends Component {
    render() {
        const { playerName, playerRole, playerId, gameId } = this.props;
        const showName = (typeof playerName !== 'undefined' && playerName !== '');
        const showRole = (typeof playerRole !== 'undefined');
        const showId = (typeof playerId !== 'undefined');
        return (
            <div className="game-header-container">
                {showName ? (<DataWidget label="Player Name" data={playerName}/>) : null}
                {showRole ? (<DataWidget label="Player Role" data={playerRole}/>) : null}
                {showId ? (<DataWidget label="Player Id" data={playerId}/>) : null}
                {this.props.gameId !== 0 ? (<DataWidget label="Game Id" data={gameId}/>) : (<div className="data-widget-container">Not in a game yet.</div>)}
            </div>
        )
    }
}

GameHeader.propTypes = propTypes;
export default GameHeader;