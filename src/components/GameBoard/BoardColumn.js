import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Story from './Story';

const propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    stories: PropTypes.object,
    storyClick: PropTypes.func
};
class BoardColumn extends Component {
    render() {
        const {name, label, stories, storyClick} = this.props;
        const Stories = typeof stories === 'undefined' ? null
            : stories.map((story) => {
                return(<Story key={story.id} story={story} click={storyClick}/>);
            });
        return (
            <div className={name + " board-column"}>
                <div className="board-column-label">{label}</div>
                <div className="board-column-stories">
                    {Stories}
                </div>
            </div>
        )
    }
}

BoardColumn.propTypes = propTypes;
export default BoardColumn;