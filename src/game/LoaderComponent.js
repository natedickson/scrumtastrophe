import React, {Component} from 'react';
import './Loader.css';

class LoaderComponent extends Component {
    render() {
        return (
            <div className="loader-container">
                loading...
                <span className="loader-spinner"></span>
            </div>
        );
    }
}

export default LoaderComponent;