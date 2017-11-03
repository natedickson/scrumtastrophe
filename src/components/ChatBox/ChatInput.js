import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    sendMessage: PropTypes.func.isRequired,
}

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedMessage: ""
        }
    }

    render() {
        return (
            <div className="single-input-component">
                <input placeholder="Enter message here..." value={this.state.typedMessage} onChange={(e)=> {this.updateMessage(e)}}/>
                <button onClick={() => {this.sendAction()}}>Send</button>
            </div>
        );
    }

    sendAction(){
        this.props.sendMessage(this.state.typedMessage);
        this.setState({
            typedMessage: ""
        })
    }

    updateMessage(evt){
        this.setState({
            typedMessage: evt.target.value
        })
    }
}

ChatInput.propTypes = propTypes;
export default ChatInput;