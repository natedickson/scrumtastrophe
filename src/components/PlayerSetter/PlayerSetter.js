import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayerSetter.css';

const propTypes = {
    onSubmit: PropTypes.func.isRequired
};

class PlayerSetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: ''
        }
    }

    render() {
        return (
            <div className="player-setter-container">
                <div>Name Yourself</div>
                <input onChange={(e) => this.setState({playerName: e.target.value})}/>
                <button onClick={this.submitNameChange}>Enter</button>
            </div>
        );
    }

    submitNameChange = () => {
        this.props.onSubmit(this.state.playerName);
    }
};

PlayerSetter.propTypes = propTypes;
export default PlayerSetter;