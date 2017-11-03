import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';

const propTypes = {
    chatLog: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired
}

class ChatBox extends Component {
    render() {
        const chatLog = this.props.chatLog;
        const sendMessage = this.props.sendMessage;
        return(
            <div>
                <ChatLog chatLog={chatLog}/>
                <ChatInput sendMessage={sendMessage}/>
            </div>
        )
    }
}

ChatBox.propTypes = propTypes;
export default ChatBox;