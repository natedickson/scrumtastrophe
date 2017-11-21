import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    story: PropTypes.object.isRequired,
    click: PropTypes.func
};

class Story extends Component {
    render() {
        const {story, click} = this.props;
        return (
            <div onClick={() => click(story.id)} className="story-container">
                <div>Story {story.id}</div>
                <div>Dev: {story.dev}</div>
                <div>QA: {story.qa}</div>
            </div>
        )
    }
}

Story.propTypes = propTypes;
export default Story;