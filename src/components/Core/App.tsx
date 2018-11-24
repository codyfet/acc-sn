import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Header} from '../Modules/Header/Header';
import {Main} from '../Modules/MainPage/Main';

export const App = () => {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}