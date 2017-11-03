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
            alreadyHasId: false,
            playerName: '',
            playerRole: '',
            playerId: ''
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
                {this.state.alreadyHasId ? (
                    <div>
                        <div>Player Id</div>
                        <input onChange={(e) => this.updatePlayerId(e)} value={this.state.playerId}/>
                    </div>
                ) : (
                    <div>
                        <div>Name Yourself</div>
                        <input onChange={(e) => this.updatePlayerName(e)} value={this.state.playerName}/>
                        <div>Name Your Role</div>
                        <select onChange={(e) => this.updatePlayerRole(e)} value={this.state.playerRole}>
                            {roleSelectOptions}
                        </select>
                    </div>
                )}
                <button onClick={this.submitChange}>Enter</button>
                {this.state.alreadyHasId ? null : (
                    <div>
                        <br/>
                        <a onClick={this.doOtherThing}>Already have a player id?</a>
                    </div>
                )}
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
    };

    updatePlayerId = (e) => {
        const state = this.state;
        state.playerId = e.target.value;
        this.setState(state);
    };

    submitChange = () => {
        let data = {
            name: this.state.playerName,
            role: this.state.playerRole
        };
        this.props.onSubmit(data);
    };

    doOtherThing = () => {
        const state = this.state;
        state.alreadyHasId = true;
        this.setState(state);
    };
}

PlayerSetter.propTypes = propTypes;
export default PlayerSetter;