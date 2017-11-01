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
        return (
            <div className="game-header-container">
                <DataWidget label="Player Name" data={this.props.playerName}/>
                <DataWidget label="Player Role" data={this.props.playerRole}/>
                <DataWidget label="Player Id" data={this.props.playerId}/>
                {this.props.gameId !== 0 ? (<DataWidget label="Game Id" data={this.props.gameId}/>) : (<div className="data-widget-container">Not in game.</div>)}
            </div>
        )
    }
}

GameHeader.propTypes = propTypes;
export default GameHeader;