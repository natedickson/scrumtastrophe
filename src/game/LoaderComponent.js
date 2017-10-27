import React from 'react';
import { observer } from 'mobx-react';
import './Loader.css';

@observer
class LoaderComponent {
    render() {
        return (
            <span className="loader-spinner"></span>
        );
    }
};

export default LoaderComponent;