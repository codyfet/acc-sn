import * as React from 'react';
import {Header} from '../Modules/Header/Header';
import {Main} from '../Modules/Main/Main';

const Chatkit = require('@pusher/chatkit');

import {Login} from '../Modules/Login/Login';
import {LoginData} from '../../models/Common';
import { login } from '../../services/services';

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

                // Подключаемся к комнате.
                // currentUser.subscribeToRoom({
                //     roomId: 19385475,
                //     hooks: {
                //         // Подписываемся на получение нового сообщения.
                //         onNewMessage: (message: any) => {
                //             this.setState({
                //                 messages: [...this.state.messages, message]
                //             })
                //         },
                //         // Подписываемся на получение статуса, что юзер пишет сообщение.
                //         onUserStartedTyping: (user) => {
                //             this.setState({
                //                 typingUserName: user.name
                //             });
                //         },
                //         // Подписываемся на получение статуса, что юзер прекратил писать сообщение.
                //         onUserStoppedTyping: (user) => {
                //             this.setState({
                //                 typingUserName: null
                //             });
                //         }
                //     },
                //     messageLimit: 100
                // })
                // this.setState({
                //     currentUser,
                //     isLoading: false
                // });
            })
            .catch((error: any) => {
                if (error.statusCode === 404) {
                    alert('Такого пользователя не существует');
                }
            })
    }

    // sendMessage (text) {
    //     const {currentUser, roomId} = this.state;

    //     currentUser.sendMessage({
    //         text,
    //         roomId
    //     })
    // }

    login (loginData: LoginData) {
        // Логинимся в нашу систему.
        login(loginData).then(
            (response: any) => {
                if (response.data.authentication) {
                    this.setState({
                        loginView: false
                    });
                    // Коннектимся к chatkit ui.
                    this.connectToChat();
                } else {
                    this.setState({
                        loginViewError: true
                    });
                }
            },
            (error: any) => {
                console.log('login error');
                console.log(error);
            }
        );
    }

    handleEnterClick = (loginData: LoginData) => {
        this.setState({
            loginData
        }, () => this.login(loginData))
    }

    render () {
        if (!this.state.loginView) {
            return (
                <React.Fragment>
                    <Header />
                    <Main />
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <Login onEnterClick={this.handleEnterClick} />
                {this.state.loginViewError && <span>Неправильный логин или пароль!</span>}
            </React.Fragment>
        );
    }    

}