import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import './Game.css';
import StartPage from '../pages/StartPage/StartPage';
import LoaderComponent from './LoaderComponent';

const propTypes = {
    store: PropTypes.object,
    loader: PropTypes.object
};

@observer
class Game extends Component {
    componentDidMount() {
        this.props.store.getGames();
    }
    render() {
        return (
            <div className="game-container">
                {this.loader()}
                <StartPage store={this.props.store}/>
            </div>
        );
    }

    loader() {
        return this.loader.visible ? (<LoaderComponent/>) : null;
    }
}

Game.propTypes = propTypes;

export default Game