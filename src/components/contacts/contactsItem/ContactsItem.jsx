import React from 'react';
import styles from './ContactsItem.module.css';
import PropTypes from 'prop-types';

const ContactsItem = ({ dataId, name, number, onRemove }) => (
    <li className={styles.item}>
        <span className={styles.span}>√</span>
        <p className={styles.text}>{name}</p>
        <p className={styles.text}>{number}</p>

        <button
            data-id={dataId}
            type="button"
            className={styles.button}
            onClick={onRemove}
        >
            {/* Удалить */}
        </button>
    </li>
);

export default ContactsItem;

ContactsItem.propTypes = {
    dataId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};
