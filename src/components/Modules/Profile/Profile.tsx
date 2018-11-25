import * as React from 'react';
import {FormGroup} from '../../Core/FormGroup';
import {LayoutHeader} from '../Header/LayoutHeader';
import {User} from '../../../models/Common';
// import {MessageList} from '../MessageList/MessageList';

interface IProps {
    user: User;
    users: User[];
    chatkitUser: any;
}

interface IState {

}

const today = '25.11.2018';
export class Profile extends React.Component<IProps, IState> {

    componentDidMount () {

    }

    render () {
        return (
            <div className="row profile">
                <div className="col-xs-12">
                    <div className="col-xs-12 layout-panel pt-7 pb-7 mb-3">
                        <div className="col-xs-4">
                            <img className="user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf00ByiPUMeiPAfU6BMmbutoOswG-3LPfEYR8BqJfrQF3s5rcz"/>
                        </div>
                        <div className="col-xs-8">
                            <FormGroup
                                label={`${this.props.user.name} ${this.props.user.surname}`}
                                className="text-left text-5"
                                classNameElement="text-right col-xs-2"
                                classNameLabel="col-xs-10"
                            >
                                <div className="row">
                                    <img className="online-image mr-2 mt-1" src="https://upload.wikimedia.org/wikipedia/commons/5/50/WX_circle_green.png"/>
                                    <span className="text-1">online</span>
                                </div>
                            </FormGroup>
                            <FormGroup label="Разработчик" className="text-left" classNameElement="text-right col-xs-12" classNameLabel="col-xs-6"/>
                            <FormGroup
                                label="Дата регистрации"
                                className="text-left mt-9"
                                classNameElement="text-right col-xs-6"
                                classNameLabel="col-xs-6"
                            >
                                {today}
                            </FormGroup>
                        </div>
                    </div>
                    <div className="col-xs-12 layout-panel pt-7 pb-7">
                        <LayoutHeader label="Лента"/>
                        {/* <MessageList chatkitUser={props.chatkitUser} /> */}
                    </div>
                </div>
            </div>
        )
    }

}