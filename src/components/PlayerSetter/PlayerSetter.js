import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PlayerSetter.css';
import {observer} from 'mobx-react';

const propTypes = {
    onSubmit: PropTypes.func.isRequired,
    availablePlayerRoles: PropTypes.object.isRequired
};

@observer
class PlayerSetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            playerRole: ''
        }
    }

    componentDidUpdate() {
        //this is a workaround
        if(this.state.playerRole === '' && typeof this.props.availablePlayerRoles[0] !== "undefined") {
            const state = this.state;
            state.playerRole = this.props.availablePlayerRoles[0];
            this.setState(state);
        }
    }

    render() {
        const roleSelectOptions = this.props.availablePlayerRoles.map((role, index) => {
            return (
                <option key={index} value={role}>{role}</option>
            );
        });
        return (
            <div className="player-setter-container">
                <div>Name Yourself</div>
                <input onChange={(e) => this.updatePlayerName(e)} value={this.state.playerName}/>
                <div>Name Your Role</div>
                <select onChange={(e) => this.updatePlayerRole(e)} value={this.state.playerRole}>
                    {roleSelectOptions}
                </select>
                <br/>
                <button onClick={this.submitNameChange}>Enter</button>
            </div>
        );
    }

    updatePlayerName = (e) => {
        const state = this.state;
        state.playerName = e.target.value;
        this.setState(state);
    };

    updatePlayerRole = (e) => {
        const state = this.state;
        state.playerRole = e.target.value;
        this.setState(state);
    }

    submitNameChange = () => {
        let data = {
            name: this.state.playerName,
            role: this.state.playerRole
        }
        this.props.onSubmit(data);
    }
};

PlayerSetter.propTypes = propTypes;
export default PlayerSetter;