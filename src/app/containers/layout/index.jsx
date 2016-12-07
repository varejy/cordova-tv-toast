import React  from 'react';
import Router from 'react-router/BrowserRouter';
import Match  from 'react-router/Match';
import Link   from 'react-router/Link';

import styles from './layout.css';

export default class Layout extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Router>
                <div>
                    <header className={styles.header}>
                        <h1>TV APP</h1>
                    </header>
                    <section className={styles.section}></section>
                </div>
            </Router>
        )
    }
}