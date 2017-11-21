import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

const propTypes = {
    toast: PropTypes.string,
};

@observer
class Toast extends Component {
    render() {
        const toast = this.props.toast;
        return (
            <div className="toast">
                {toast}
            </div>
        );
    }
}

Toast.propTypes = propTypes;
export default Toast;