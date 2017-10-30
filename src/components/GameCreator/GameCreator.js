import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './GameCreator.css';

const propTypes = {
    onSubmit: PropTypes.func.isRequired
};

class GameCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameName: ''
        }
    }
    render() {
        return (
            <div className="game-creator-container">
                <div>Name Your Game</div>
                <input onChange={(e) => this.setState({gameName: e.target.value})}/>
                <button onClick={this.props.onSubmit}>Enter</button>
            </div>
        );
    }
};

GameCreator.propTypes = propTypes;
export default GameCreator;