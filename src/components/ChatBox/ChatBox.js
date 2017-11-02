import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';

const propTypes = {
    chatLog: PropTypes.object.isRequired,
    gameState: PropTypes.object.isRequired
}

class ChatBox extends Component {
    render() {
        const chatLog = this.props.chatLog;
        const gameState = this.props.gameState;
        return(
            <div>
                <ChatLog chatLog={chatLog}/>
                <ChatInput gameState={gameState}/>
            </div>
        )
    }
}

ChatBox.propTypes = propTypes;
export default ChatBox;