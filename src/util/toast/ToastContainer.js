import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import './Toast.css';
import Toast from './ToastComponent';

const propTypes = {
    toast: PropTypes.object
};

@observer
class ToastContainer extends Component {
    render() {
        const Toasts = this.props.toast.toasts.map((toast, index) => {
            return (<Toast key={index} toast={toast}/>);
        });
        return (
            <div onClick={() => this.props.toast.eat()} className="toast-container">
                {Toasts}
            </div>
        );
    }
}

ToastContainer.propTypes = propTypes;
export default ToastContainer;