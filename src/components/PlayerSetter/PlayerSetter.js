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
                <form onSubmit={this.submitNameChange}>
                    <input onChange={(e) => this.setState({playerName: e.target.value})}/>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }

    submitNameChange = () => {
        this.props.onSubmit(this.state.playerName);
    }
};

PlayerSetter.propTypes = propTypes;
export default PlayerSetter;