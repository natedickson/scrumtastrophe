import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import './GameBoard.css';
import BoardColumn from './BoardColumn';

const propTypes = {
    sprintStories: PropTypes.object.isRequired,
    storyClick: PropTypes.func
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
                    <BoardColumn name="sprint-backlog" label="Backlog" stories={stories.backlog} storyClick={this.props.storyClick}/>
                    <BoardColumn name="sprint-in-dev" label="Dev" stories={stories.inDev} storyClick={this.props.storyClick}/>
                    <BoardColumn name="sprint-in-code-review" label="C.R." stories={stories.inCodeReview} storyClick={this.props.storyClick}/>
                    <BoardColumn name="sprint-in-qa" label="QA" stories={stories.inQa} storyClick={this.props.storyClick}/>
                    <BoardColumn name="sprint-complete" label="Complete" stories={stories.complete} storyClick={this.props.storyClick}/>
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