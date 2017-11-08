import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    story: PropTypes.object.isRequired
};

class Story extends Component {
    render() {
        const story = this.props.story;
        return (
            <div className="story-container">
                <div>Story {story.id}</div>
                <div>Dev: {story.dev}</div>
                <div>QA: {story.qa}</div>
            </div>
        )
    }
}

Story.propTypes = propTypes;
export default Story;