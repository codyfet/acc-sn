import * as React from 'react';
import {Header} from '../Modules/Header/Header';
import {Main} from '../Modules/Main/Main';
// import Chatkit from '@pusher/chatkit';
import {Login} from '../Modules/Login/Login';

interface IProps {

}

interface IState {
    chatkitUser: object;
    loginView: boolean;
}

export class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            chatkitUser: null,
            loginView: true
        }
    }

    // connectToChat (loginData) {
    //     this.setState({
    //         isLoading: true
    //     });

    //     const chatManager = new Chatkit.ChatManager({
    //         instanceLocator: 'v1:us1:b301ed3f-7bb1-49b6-b041-35c6cbb3de86',
    //         userId: loginData.username,
    //         tokenProvider: new Chatkit.TokenProvider({
    //             url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/b301ed3f-7bb1-49b6-b041-35c6cbb3de86/token'
    //         })
    //     })

    //     chatManager.connect()
    //         .then((currentUser) => {
    //             // Подключаемся к комнате.
    //             currentUser.subscribeToRoom({
    //                 roomId: loginData.roomId,
    //                 hooks: {
    //                     // Подписываемся на получение нового сообщения.
    //                     onNewMessage: message => {
    //                         this.setState({
    //                             messages: [...this.state.messages, message]
    //                         })
    //                     },
    //                     // Подписываемся на получение статуса, что юзер пишет сообщение.
    //                     onUserStartedTyping: (user) => {
    //                         this.setState({
    //                             typingUserName: user.name
    //                         });
    //                     },
    //                     // Подписываемся на получение статуса, что юзер прекратил писать сообщение.
    //                     onUserStoppedTyping: (user) => {
    //                         this.setState({
    //                             typingUserName: null
    //                         });
    //                     }
    //                 },
    //                 messageLimit: 100
    //             })
    //             this.setState({
    //                 currentUser,
    //                 isLoading: false
    //             });
    //         })
    //         .catch((error) => {
    //             if (error.statusCode === 404) {
    //                 alert('Такого пользователя не существует');
    //             }
    //             this.setState({
    //                 isLoading: false
    //             });
    //         })
    // }

    // sendMessage (text) {
    //     const {currentUser, roomId} = this.state;

    //     currentUser.sendMessage({
    //         text,
    //         roomId
    //     })
    // }

    handleEnterClick = () => {
        this.setState({
            loginView: false
        })
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
                    <Main onLogout={this.handleLogout}/>
                </React.Fragment>
            )
        }

        return <Login onEnterClick={this.handleEnterClick}/>;
    }    

}