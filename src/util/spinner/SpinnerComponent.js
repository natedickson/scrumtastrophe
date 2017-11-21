import React, {Component} from 'react';
import './Spinner.css';

class SpinnerComponent extends Component {
    render() {
        return (
            <div className="spinner-container">
                loading...
                <span className="spinner"></span>
            </div>
        );
    }
}

export default SpinnerComponent;