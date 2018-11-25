import * as React from 'react';
import {Header} from '../Modules/Header/Header';
import {Main} from '../Modules/Main/Main';

const Chatkit = require('@pusher/chatkit');

import {Login} from '../Modules/Login/Login';
import {LoginData, User} from '../../models/Common';
import {login, getUsers} from '../../services/services';
import {Spinner} from './Spinner';

interface IProps {

}

/**
 * @prop {object} chatkitUser Chatkit пользователь.
 * @prop {boolean} loginView Признак отрисовки экрана логин.
 * @prop {boolean} loginViewError Признак ошибки выполнения запроса на логин в нашу систему.
 * @prop {LoginData} loginData Данные с формы логина.
 * @prop {boolean} isLoading Признак загрузки.
 */
interface IState {
    chatkitUser: object;
    user: User;
    users: any;
    loginView: boolean;
    loginViewError: boolean;
    loginData: LoginData;
    isLoading: boolean;
}

export class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            chatkitUser: null,
            user: null,
            users: null,
            loginView: true,
            loginViewError: false,
            loginData: null,
            isLoading: false
        }
    }

    connectToChat () {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:2847dca1-27c1-4716-a4bd-fe2089a67d6f',
            userId: this.state.loginData.username,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/2847dca1-27c1-4716-a4bd-fe2089a67d6f/token'
            })
        })

        chatManager.connect()
            .then((currentUser: any) => {
                this.setState({
                    chatkitUser: currentUser
                });
            })
            .catch((error: any) => {
                if (error.statusCode === 404) {
                    alert('Такого пользователя не существует');
                }
                this.setState({
                    isLoading: false
                })
            })
    }

    loadData = (loginData: LoginData) => {
        this.setState({isLoading: true});

        const p1 = getUsers().then(
            (response: any) => {
                this.setState({
                    users: response.data.data
                })
            }
        );
        const p2 = login(loginData).then(
            (response: any) => {
                if (!!response.data.user) {
                    this.setState({
                        loginView: false,
                        user: response.data.user
                    }, () => this.connectToChat());                   

                } else {
                    this.setState({
                        loginViewError: true,
                        isLoading: false
                    });
                }
            },
            (error: any) => {
                console.log('login error');
                console.log(error);
                this.setState({
                    loginViewError: true,
                    isLoading: false
                });
            }
        );

        Promise.all([p1, p2]).then(
            () => { 
                this.setState({
                    isLoading: false
                })
            },
            () => {
                this.setState({
                    isLoading: false
                })
            }
        );
    }

    handleEnterClick = (loginData: LoginData) => {
        this.setState({
            loginData
        }, () => this.loadData(loginData))
    }

    handleLogout = () => {
        this.setState({
            loginView: true
        })
    }

    render () {
        if (this.state.isLoading) {
            return <Spinner/>;
        } else if (!this.state.loginView) {
            return (
                <React.Fragment>
                    <Header
                        users={this.state.users}
                    />
                    <Main 
                        onLogout={this.handleLogout}
                        chatkitUser={this.state.chatkitUser} 
                        user={this.state.user} 
                        users={this.state.users}
                    />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>                      
                    <Login onEnterClick={this.handleEnterClick} />
                    {this.state.loginViewError && <span>Неправильный логин или пароль!</span>}
                </React.Fragment>
            );
        }

        return <Login onEnterClick={this.handleEnterClick}/>;
    }
}