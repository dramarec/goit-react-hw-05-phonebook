import React from 'react';
import styles from './Find.module.css';
import PropTypes from 'prop-types';

const FindContact = ({ filter, onChangeFilter }) => {
    return (
        <>
            <input
                type="text"
                className={styles.input}
                placeholder="Find contacts by name"
                value={filter}
                onChange={onChangeFilter}
            />
        </>
    );
};

export default FindContact;

FindContact.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};
