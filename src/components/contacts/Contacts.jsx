import React from 'react';
import ContactsItem from './contactsItem/ContactsItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ tasks, onRemove }) => {
    return (
        <TransitionGroup component="ul" className={styles}>
            {tasks.map(({ name, number, id }) => (
                <CSSTransition key={id} timeout={250} classNames={styles}>
                    <ContactsItem
                        key={id}
                        name={name}
                        number={number}
                        onRemove={onRemove}
                        dataId={id}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default Contacts;
Contacts.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object.isRequired),
    onRemove: PropTypes.func.isRequired,
};
