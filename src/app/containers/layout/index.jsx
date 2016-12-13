import React  from 'react';
import Router from 'react-router/HashRouter';
import Match  from 'react-router/Match';

import Header from './components/header';
import Home   from '../home';
import Audio  from '../../shared/components/audio';
import Video  from '../../shared/components/video';

import styles from './layout.css';

export default class Layout extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Router>
                <div>
                    <Header className={styles.header} title="TV APP" />
                    <section className={styles.section}>
                        <Match exactly pattern="/" component={Home} />
                        <Match pattern="/audio" component={Audio} />
                        <Match pattern="/video" component={Video} />
                    </section>
                </div>
            </Router>
        )
    }
}