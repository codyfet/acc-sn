import * as React from 'react';
import {Header} from '../Modules/Header/Header';
import {Main} from '../Modules/Main/Main';

const Chatkit = require('@pusher/chatkit');

import {Login} from '../Modules/Login/Login';
import {LoginData} from '../../models/Common';

interface IProps {

}

interface IState {
    chatkitUser: object;
    loginView: boolean;
    loginData: LoginData;
    isLoading: boolean;
}

export class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            chatkitUser: null,
            loginView: true,
            loginData: null,
            isLoading: false
        }
    }

    connectToChat () {
        this.setState({
            isLoading: true
        });

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

                console.log('currentUser');
                console.log(currentUser);

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
                this.setState({
                    isLoading: false
                });
            })
    }

    // sendMessage (text) {
    //     const {currentUser, roomId} = this.state;

    //     currentUser.sendMessage({
    //         text,
    //         roomId
    //     })
    // }

    handleEnterClick = (loginData: LoginData) => {
        this.setState({
            loginView: false,
            loginData
        }, () => this.connectToChat())
    }

    render () {
        if (!this.state.loginView) {
            return (
                <React.Fragment>
                    <Header />
                    <Main />
                </React.Fragment>
            )
        }

        return <Login onEnterClick={this.handleEnterClick} />;
    }    

}