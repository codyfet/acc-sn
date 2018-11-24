import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Header} from './Header';
import {Main} from './Main';

export const App = () => {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}