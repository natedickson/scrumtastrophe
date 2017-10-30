import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

const propTypes = {
    player: PropTypes.object.isRequired
};

@observer
class PlayerListEntry extends Component {
    render() {
        const player = this.props.player;
        return (
            <div className="player-list-entry">
                <span>{player.name}</span>
                <span> : </span>
                <span>{player.id}</span>
            </div>
        )
    }
}

PlayerListEntry.propTypes = propTypes;
export default PlayerListEntry;