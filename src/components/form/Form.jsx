import React, { Component } from 'react';
import styles from './Form.module.css';

export default class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onAddContact({
            name: this.state.name,
            number: this.state.number,
        });
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        // const { name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>

                <label>
                    Number
                    <input
                        type="text"
                        name="number"
                        className={styles.input}
                        placeholder="Number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                    />
                </label>

                <button className={styles.button} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}
