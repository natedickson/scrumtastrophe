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
            <span>{label} : </span>
            <span>{data}</span>
        </div>
    )
};

DataWidget.propTypes = propTypes;
export default DataWidget;