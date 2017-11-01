import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import PlayerListEntry from './PlayerListEntry';

const propTypes = {
    players: PropTypes.object.isRequired
};

@observer
class PlayerList extends Component {
    render() {
        const players = this.props.players.map((player) => {
            return (
                <PlayerListEntry key={player.id} player={player}/>
            )
        });
        return (
            <div className="player-list-container">
                {players}
            </div>
        )
    }
}

PlayerList.propTypes = propTypes;
export default PlayerList;