import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';

import {Conversations} from '../Conversations/Conversations';
import {Profile} from '../Profile/Profile';
import {News} from '../News/News';
import {Groups} from '../Groups/Groups';
import {Home} from '../Home/Home';
import {Questions} from '../Questions/Questions';
import {MessageList} from '../MessageList/MessageList';
import {ExpandingPanel} from '../../Core/ExpandingPanel';
import {EExpandingPanelType} from '../../Core/Enums';
import {MenuLabel} from './MenuLabel';
import {EQuestionType} from '../Questions/Models';

interface IProps {
    onLogout: () => void;
    chatkitUser: any;
}

export const Main: React.SFC<IProps> = (props: IProps) => {
    const {onLogout} = props;

    const questionsElement = (
        <ExpandingPanel
            collapsed
            headerClassName="pb-0"
            collapsedIconClassName="fa-question-circle-o mr-2"
            expandedIconClassName="fa-question-circle-o mr-2"
            panelType={EExpandingPanelType.MENU}
            header="Вопросы"
        >
            <MenuLabel name="Human Resources" route="hr-questions" iconClass="fa-handshake-o" className="pl-0 mb-2"/>
            <MenuLabel name="Tver IT" route="it-questions" iconClass="fa-laptop" className="pl-0 mb-2"/>
            <MenuLabel name="Workplace" route="wp-questions" iconClass="fa-map-o" className="pl-0 mb-2"/>
            <MenuLabel name="Information Seqrity" route="is-questions" iconClass="fa-eye-slash" className="pl-0 mb-2"/>
            <MenuLabel name="Careers" route="cr-questions" iconClass="fa-building-o" className="pl-0"/>
        </ExpandingPanel>
    )

    const resourcesElement = (
        <ExpandingPanel
            collapsed
            headerClassName="pb-0"
            collapsedIconClassName="fa-mixcloud mr-2"
            expandedIconClassName="fa-mixcloud mr-2"
            panelType={EExpandingPanelType.MENU}
            header="Ресурсы"
        >
            <MenuLabel name="Заполнение времени" route="https://myte.accenture.com/OGTE/secure/TimesheetPage.aspx#" iconClass="fa-clock-o" className="pl-0 mb-2" isExtLink/>
            <MenuLabel name="Бронирование переговорных" route="https://email.accenture.com/owa/" iconClass="fa-calendar" className="pl-0 mb-2" isExtLink/>
            <MenuLabel name="Больничные и отпуска" route="https://ts.accenture.com/sites/MoscowCommunityPortal/VBTRtool/Lists/VacationsandBusinessTrips/btrips.aspx" iconClass="fa-address-card-o" className="pl-0 mb-2" isExtLink/>
            <MenuLabel name="HR Запросы" route="https://myrequests.accenture.com/" iconClass="fa-newspaper-o" className="pl-0 mb-2" isExtLink/>
            <MenuLabel name="Достижения" route="https://performance.accenture.com/" iconClass="fa-star-o" className="pl-0 mb-2" isExtLink/>
            <MenuLabel name="Обучение" route="https://mylearning.accenture.com/myl-ui/" iconClass="fa-pencil-square-o" className="pl-0 mb-2" isExtLink/>
            <MenuLabel name="Карта офиса" route="https://email.accenture.com/owa/" iconClass="fa-map-o" className="pl-0 mb-2" isExtLink/>
            <MenuLabel name="Облачное хранилище" route="https://myoffice.accenture.com/_layouts/15/MySite.aspx?MySiteRedirect=AllDocuments" iconClass="fa-mixcloud" className="pl-0" isExtLink/>
        </ExpandingPanel>
    )

    return (
        <Grid className="main">
            <Row className="show-grid">
                <Col xs={3}>
                    <MenuLabel name="Новости" route="news" iconClass="fa-server"/>
                    <MenuLabel name="Профиль" route="profile" iconClass="fa-user-o"/>
                    <MenuLabel name="Переписки" route="conversations" iconClass="fa-envelope-open-o"/>
                    <MenuLabel name="Группы" route="groups" iconClass="fa-comments-o"/>
                    <MenuLabel name={questionsElement}/>
                    <MenuLabel name={resourcesElement}/>
                    <MenuLabel name="Выйти" iconClass="fa-sign-out" onClick={onLogout}/>
                    <ul>
                        
                    </ul>
                </Col>
                <Col xs={9}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/conversations/:roomId' component={() => <MessageList chatkitUser={props.chatkitUser} />} />
                        <Route path='/conversations/' component={() => <Conversations rooms={props.chatkitUser && props.chatkitUser.rooms} />} />
                        <Route path='/groups' component={Groups} />
                        <Route path='/news' component={News} />
                        <Route path='/it-questions' component={() => <Questions questionType={EQuestionType.IT}/>} />
                        <Route path='/hr-questions' component={() => <Questions questionType={EQuestionType.HR}/>} />
                        <Route path='/wp-questions' component={() => <Questions questionType={EQuestionType.WORKPLACE}/>} />
                        <Route path='/cr-questions' component={() => <Questions questionType={EQuestionType.CAREERS}/>} />
                        <Route path='/is-questions' component={() => <Questions questionType={EQuestionType.SEQRITY}/>} />
                    </Switch>
                </Col>
            </Row>
        </Grid>
    )
}