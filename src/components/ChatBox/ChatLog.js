import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

const propTypes = {
    chatLog: PropTypes.object.isRequired
}

@observer
class ChatLog extends Component {
    render() {
        const chatLog = this.props.chatLog.map((message) => {
            return (
                <div>
                    {message}
                </div>
            )
        });
        return (
            <div>
                <div>
                    Chat
                </div>
                {chatLog}
            </div>
        );
    }
}
ChatLog.propTypes = propTypes;
export default ChatLog;