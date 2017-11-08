import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import './GameBoard.css';
import BoardColumn from './BoardColumn';

const propTypes = {
    sprintStories: PropTypes.object.isRequired,
};

@observer
class GameBoard extends Component {

    render() {
        const stories = this.props.sprintStories;
        return (
            <div className="game-board-container">
                <div className="white-board">
                    <div className="game-board-header">
                        Scrum Board
                    </div>
                    <BoardColumn name="sprint-backlog" label="Backlog" stories={stories.backlog}/>
                    <BoardColumn name="sprint-in-dev" label="Dev" stories={stories.inDev}/>
                    <BoardColumn name="sprint-in-code-review" label="C.R." stories={stories.inCodeReview}/>
                    <BoardColumn name="sprint-in-qa" label="QA" stories={stories.inQa}/>
                    <BoardColumn name="sprint-complete" label="Complete" stories={stories.complete}/>
                    <div className="eraser"></div>
                    <div className="red-pen"></div>
                    <div className="blue-pen"></div>
                </div>
            </div>
        )

    }
}

GameBoard.propTypes = propTypes;
export default GameBoard;