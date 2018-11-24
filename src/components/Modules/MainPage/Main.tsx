import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Switch, Route} from 'react-router-dom';

import {Search} from '../Search/Search';
import {Profile} from '../Profile/Profile';
import {Home} from '../Home/Home';

export const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/search' component={Search} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </div>
    )
}