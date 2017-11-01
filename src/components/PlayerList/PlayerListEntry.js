import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import './PlayerList.css';

const propTypes = {
    player: PropTypes.object.isRequired
};

@observer
class PlayerListEntry extends Component {
    render() {
        const player = this.props.player;
        return (
            <div className="autowide">
                <span className="player-list-items">{player.name}</span>
                <span className="player-list-items">{player.id}</span>
                <span className="player-list-items">{player.role}</span>
                {/* <span>{player.points}</span> */}
                <span className="player-list-items">15</span>
            </div>
        )
    }
}

PlayerListEntry.propTypes = propTypes;
export default PlayerListEntry;