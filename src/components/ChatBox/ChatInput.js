import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    gameState: PropTypes.object.isRequired,
}

class ChatInput extends Component {
    render() {
        return (
            <div className="single-input-component">
                <input placeholder="Enter message here..."/>
                <button onClick={() => {this.props.gameState.sendMessage("this is totally what i typed")}}>Send</button>
            </div>
        );
    }
}

ChatInput.propTypes = propTypes;
export default ChatInput;