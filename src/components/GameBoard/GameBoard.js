import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import './GameBoard.css';
import Story from './Story';

const propTypes = {
    sprintStories: PropTypes.object.isRequired,
};

@observer
class GameBoard extends Component {
    render() {
        const Stories = this.props.sprintStories.map( (story) => {
            return(<Story key={story.id} story={story}/>)
        });
        return (
            <div className="game-board-container">
                {Stories}
            </div>
        )

    }
}

GameBoard.propTypes = propTypes;
export default GameBoard;