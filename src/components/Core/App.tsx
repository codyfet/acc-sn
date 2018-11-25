import * as React from 'react';
import {Header} from '../Modules/Header/Header';
import {Main} from '../Modules/Main/Main';

const Chatkit = require('@pusher/chatkit');

import {Login} from '../Modules/Login/Login';
import {LoginData, User} from '../../models/Common';
import {login} from '../../services/services';
import {Spinner} from './Spinner';

interface IProps {

}

/**
 * @prop {object} chatkitUser Chatkit пользователь.
 * @prop {boolean} loginView Признак отрисовки экрана логин.
 * @prop {boolean} loginViewError Признак ошибки выполнения запроса на логин в нашу систему.
 * @prop {LoginData} loginData Данные с формы логина.
 * @prop {boolean} isLoading Признак загрузки.
 * @prop {Array} rooms Комнаты пользователя.
 */
interface IState {
    chatkitUser: object;
    user: User;
    loginView: boolean;
    loginViewError: boolean;
    loginData: LoginData;
    isLoading: boolean;
    rooms: Array<number>;
}

export class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            chatkitUser: null,
            user: null,
            loginView: true,
            loginViewError: false,
            loginData: null,
            isLoading: false,
            rooms: [19385475]
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
            })
    }


    login (loginData: LoginData) {
        // Логинимся в нашу систему.
        this.setState({isLoading: true})
        login(loginData).then(
            (response: any) => {
                if (!!response.data.user) {
                    this.setState({
                        loginView: false,
                        user: response.user,
                        isLoading: false
                    });
                    // Коннектимся к chatkit ui.
                    this.connectToChat();
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
    }

    handleEnterClick = (loginData: LoginData) => {
        this.setState({
            loginData
        }, () => this.login(loginData))
    }

    handleLogout = () => {
        this.setState({
            loginView: true
        })
    }

    render () {
        if (!this.state.loginView) {
            return (
                <React.Fragment>
                    <Header />
                    <Main 
                        onLogout={this.handleLogout}
                        chatkitUser={this.state.chatkitUser} 
                    />
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
               {this.state.isLoading && <Spinner/>}
                
                <Login onEnterClick={this.handleEnterClick} />
                {this.state.loginViewError && <span>Неправильный логин или пароль!</span>}
            </React.Fragment>
        );

        return <Login onEnterClick={this.handleEnterClick}/>;
    }
}