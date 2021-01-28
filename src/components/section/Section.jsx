import React from 'react';
import style from './Section.module.css';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Section = ({ children, title }) => {
    return (
        <section className={style.container}>
            <CSSTransition
                in={true}
                appear={true}
                classNames={style}
                timeout={500}
                unmountOnExit
            >
                {title && <h2>{title}</h2>}
            </CSSTransition>

            <CSSTransition
                in={true}
                appear={true}
                classNames={style}
                timeout={500}
                unmountOnExit
            >
                {children}
            </CSSTransition>
        </section>
    );
};

export default Section;

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};
