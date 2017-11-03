import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import './PlayerActions.css';

const propTypes = {
    availableActions: PropTypes.object.isRequired,
    actionCallback: PropTypes.func.isRequired
};

@observer
class PlayerActions extends Component {
    render() {
        const Actions = this.props.availableActions.map( (action, index) => {
            return(<button key={index} onClick={() => this.props.actionCallback(action)}>{action.label}</button>)
        });
        return (
            <div className="player-actions-container">
                {Actions}
            </div>
        )

    }
}

PlayerActions.propTypes = propTypes;
export default PlayerActions;