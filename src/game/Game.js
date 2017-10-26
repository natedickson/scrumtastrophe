import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import 'Game.css';
import StartPage from "../pages/StartPage/StartPage";

const propTypes = {
    store: PropTypes.object
};

@observer
class Game extends Component {
    componentWillMount() {
        this.props.store.getUsers();
    }
    render() {
        return (
            <Provider {...this.props}>
                <div>
                    <StartPage/>
                </div>
            </Provider>
        );
    }
}

Game.propTypes = {
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    label: PropTypes.string,
};

export default Game