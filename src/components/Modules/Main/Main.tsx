import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';

import {Conversations} from '../Conversations/Conversations';
import {Profile} from '../Profile/Profile';
import {News} from '../News/News';
import {Groups} from '../Groups/Groups';
import {Home} from '../Home/Home';
import {Questions} from '../Questions/Questions';
import {ExpandingPanel} from '../../Core/ExpandingPanel';
import {EExpandingPanelType} from '../../Core/Enums';
import {MenuLabel} from './MenuLabel';
import {EQuestionType} from '../Questions/Models';

export const Main = () => {
    const questionsElement = (
        <ExpandingPanel
            collapsed
            headerClassName="pb-0"
            collapsedIconClassName="fa-user-circle mr-2"
            expandedIconClassName="fa-user-circle mr-2"
            panelType={EExpandingPanelType.MENU}
            header="Вопросы"
        >
            <MenuLabel name="Human Resources" route="hr-questions" iconClass="fa-user-circle" className="pl-0 mb-2"/>
            <MenuLabel name="Tver IT" route="it-questions" iconClass="fa-user-circle" className="pl-0 mb-2"/>
            <MenuLabel name="Workplace" route="wp-questions" iconClass="fa-user-circle" className="pl-0 mb-2"/>
            <MenuLabel name="Careers" route="cr-questions" iconClass="fa-user-circle" className="pl-0 mb-2"/>
        </ExpandingPanel>
    )
    return (
        <Grid className="main">
            <Row className="show-grid">
                <Col xs={3}>
                    <MenuLabel name="Профиль" route="profile" iconClass="fa-user-circle"/>
                    <MenuLabel name="Переписки" route="conversations" iconClass="fa-user-circle"/>
                    <MenuLabel name="Группы" route="groups" iconClass="fa-user-circle"/>
                    <MenuLabel name="Новости" route="news" iconClass="fa-user-circle"/>
                    <MenuLabel name={questionsElement} iconClass="fa-user-circle"/>
                    <ul>
                        
                    </ul>
                </Col>
                <Col xs={9}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/conversations' component={Conversations} />
                        <Route path='/groups' component={Groups} />
                        <Route path='/news' component={News} />
                        <Route path='/it-questions' component={() => <Questions questionType={EQuestionType.IT}/>} />
                        <Route path='/hr-questions' component={() => <Questions questionType={EQuestionType.HR}/>} />
                        <Route path='/wp-questions' component={() => <Questions questionType={EQuestionType.WORKPLACE}/>} />
                        <Route path='/cr-questions' component={() => <Questions questionType={EQuestionType.CAREERS}/>} />
                    </Switch>
                </Col>
            </Row>
        </Grid>
    )
}