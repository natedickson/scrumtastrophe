import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

const propTypes = {
    store: PropTypes.object,
    loader: PropTypes.object
}

@observer
class GamePage extends Component{
    render() {
        return (
            <div className="game-page-container">
                this is a game
            </div>
        )
    }
}

GamePage.propTypes = propTypes;
export default GamePage;