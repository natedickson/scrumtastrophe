import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PopUp.css';

const propTypes = {
    popupTitle: PropTypes.string.isRequired,
    popupContent: PropTypes.func.isRequired,
    onExit: PropTypes.func.isRequired,
    okayButton: PropTypes.bool.isRequired,
    onOk: PropTypes.func
};

class PopUp extends Component {

    render() {
        return (
            <div className="popup-container">
                <div className="popup-title">{this.props.popupTitle}</div>
                <button className="popup-exit-button" onClick={() => this.props.onExit()}/>
                {this.props.popupContent()}
                {this.props.okayButton ? (
                    <button className="popup-submit-button" onClick={() => this.props.onOk()}/>
                ) : null}
            </div>
        );
    }
};

PopUp.propTypes = propTypes;
export default PopUp;