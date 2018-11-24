import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {Conversations} from '../Conversations/Conversations';
import {Profile} from '../Profile/Profile';
import {News} from '../News/News';
import {Groups} from '../Groups/Groups';
import {Home} from '../Home/Home';

export const Main = () => {
    return (
        <Grid>
            <Row className="show-grid">
                <Col xs={3}>
                    <ul><Link to='/profile'>Профиль</Link></ul>
                    <ul><Link to='/conversations'>Переписки</Link></ul>
                    <ul><Link to='/groups'>Группы</Link></ul>
                    <ul><Link to='/news'>Новости</Link></ul>
                </Col>
                <Col xs={9}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/conversations' component={Conversations} />
                        <Route path='/groups' component={Groups} />
                        <Route path='/news' component={News} />
                    </Switch>
                </Col>
            </Row>
        </Grid>
    )
}