import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
};

const MenuButton = ({onClick, label}) => {
    return (
        <button className="menu-button" onClick={() => onClick()}>
            {label}
        </button>
    );
};

MenuButton.propTypes = propTypes;
export default MenuButton;