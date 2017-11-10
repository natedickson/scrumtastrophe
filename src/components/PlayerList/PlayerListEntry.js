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
            <div className="player-list-items">
                <span className="player-list-name">{player.name}</span>
                <span>{player.id}</span>
                <span>{player.role}</span>
                <span style={{textAlign: "right"}}>{player.availableLoad}</span>
            </div>
        )
    }
}

PlayerListEntry.propTypes = propTypes;
export default PlayerListEntry;