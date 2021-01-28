import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';

import Form from './form/Form';
import Header from './header/Header';
import Section from './section/Section';
import Contacts from './contacts/Contacts';
import FindContact from './findContact/FindContact';
import styles from './Phonebook.module.css';
import { Empty, Used } from './natification/Natification';

export default class Phonebook extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        showEmptyAlert: false,
        showUsedAlert: false,
    };

    componentDidMount() {
        const contactsFromLs = localStorage.getItem('contacts');
        if (contactsFromLs) {
            this.setState({ contacts: JSON.parse(contactsFromLs) });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.contacts !== this.state.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts),
            );
        }
    }

    addContact = ({ name, number }) => {
        const { contacts } = this.state;
        const contact = {
            id: uuidv4(),
            name,
            number,
        };

        if (
            contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase(),
            )
        ) {
            this.setState({ showUsedAlert: true });
            setTimeout(() => this.setState({ showUsedAlert: false }), 2500);
            return;
        }
        if (contacts.find(contact => contact.number === number)) {
            this.setState({ showUsedAlert: true });
            setTimeout(() => this.setState({ showUsedAlert: false }), 2500);
            return;
        }
        if (!name.length || !number.length) {
            this.setState({ showEmptyAlert: true });
            setTimeout(() => this.setState({ showEmptyAlert: false }), 2500);
            return;
        }
        this.setState(prevState => {
            return {
                contacts: [...prevState.contacts, contact],
            };
        });
    };

    removeContact = e => {
        const id = e.target.dataset.id;
        this.setState({
            contacts: [
                ...this.state.contacts.filter(contact => contact.id !== id),
            ],
        });
    };

    changeFilter = e => {
        this.setState({ filter: e.target.value });
    };

    getVisibleTasks = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    render() {
        const { contacts, filter, showUsedAlert, showEmptyAlert } = this.state;
        const visibleTasks = this.getVisibleTasks();
        return (
            <>
                <CSSTransition
                    in={true}
                    appear={true}
                    classNames={styles}
                    timeout={500}
                    unmountOnExit
                >
                    <Header title="Home Work #2 Phonebook" />
                </CSSTransition>

                <Section title="Phonebook">
                    <Form onAddContact={this.addContact} />
                </Section>

                {contacts.length > 1 && (
                    <Section title="Finder contacts">
                        <FindContact
                            filter={filter}
                            onChangeFilter={this.changeFilter}
                        />
                    </Section>
                )}

                {contacts.length > 0 && (
                    <Section title="My Contacts">
                        <Contacts
                            tasks={visibleTasks}
                            onRemove={this.removeContact}
                        />
                    </Section>
                )}

                <CSSTransition
                    in={showEmptyAlert}
                    appear={true}
                    timeout={250}
                    classNames={styles}
                    unmountOnExit
                >
                    <Empty />
                </CSSTransition>

                <CSSTransition
                    in={showUsedAlert}
                    appear={true}
                    timeout={250}
                    classNames={styles}
                    unmountOnExit
                >
                    <Used />
                </CSSTransition>
            </>
        );
    }
}
