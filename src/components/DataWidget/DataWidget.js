import React from 'react';
import PropTypes from 'prop-types';
import './DataWidget.css'

const propTypes = {
    label: PropTypes.string,
    data: PropTypes.any
};

const DataWidget = ({label, data}) => {
    return (
        <div className="data-widget-container">
            <span className="data-widget-label">{label}</span>
            <span className="data-widget-data">{data}</span>
        </div>
    )
};

DataWidget.propTypes = propTypes;
export default DataWidget;