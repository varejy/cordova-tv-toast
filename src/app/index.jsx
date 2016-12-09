import { AppContainer } from 'react-hot-loader';
import React            from 'react';
import ReactDOM         from 'react-dom';
import App              from './containers/layout';

import './global.css';

const rootEl = document.getElementById('root');

document.addEventListener('deviceready', () => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        rootEl
    );

    if (module.hot) {
        module.hot.accept('./containers/layout', () => {
            const NextApp = require('./containers/layout').default;
            ReactDOM.render(
                <AppContainer>
                    <NextApp />
                </AppContainer>,
                rootEl
            );
        });
    }
}, false);
