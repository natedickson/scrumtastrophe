import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const propTypes = {
    store: PropTypes.object,
    loader: PropTypes.object
};

@observer
class GameLobbyPage extends Component{
    render() {
        return (
            <div className="game-lobby-page-container">
                <div className="lobby-chat-container">could be chat here...</div>
            </div>
        )
    }
}

GameLobbyPage.propTypes = propTypes;
export default GameLobbyPage;