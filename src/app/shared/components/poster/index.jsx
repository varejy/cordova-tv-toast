import React  from 'react';
import Link   from 'react-router/Link';

import styles from './poster.css';

export default class Poster extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, pathTo, active } = this.props;
        const highlighted = active? styles.active : '';
        return (
            <div className={`${styles.link} ${highlighted}`} onClick={this.props.handler}>{title}</div>
        )
    }
}