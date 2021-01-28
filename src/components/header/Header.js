import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    const styles = {
        textAlign: 'center',
    };

    return (
        <header style={styles}>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
