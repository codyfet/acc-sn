import * as React from 'react';
import {SendMessageForm} from '../SendMessageForm/SendMessageForm';
import ScrollToBottom from 'react-scroll-to-bottom';
interface IProps {
    chatkitUser: any;
}

interface IState {
    isLoading: boolean;
    messages: any;
}

export class MessageList extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            isLoading: true,
            messages: []
        }
    }

    componentDidMount () {
        const index: string = window.location.pathname.split('/')[2];
        const room = this.props.chatkitUser.rooms[parseInt(index)];

        this.props.chatkitUser.subscribeToRoom({
            roomId: room.id,
            hooks: {
                // Подписываемся на получение нового сообщения.
                onNewMessage: (message: any) => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                },
                // Подписываемся на получение статуса, что юзер пишет сообщение.
                // onUserStartedTyping: (user) => {
                //     this.setState({
                //         typingUserName: user.name
                //     });
                // },
                // // Подписываемся на получение статуса, что юзер прекратил писать сообщение.
                // onUserStoppedTyping: (user) => {
                //     this.setState({
                //         typingUserName: null
                //     });
                // }
            },
            messageLimit: 20
        });
    }

    render() {
        return (
            <React.Fragment>
                <ScrollToBottom mode="bottom" className="message-list scrollable-chat-view">
                    {this.state.messages.map((message: any) => {
                        const date = new Date(message.createdAt);

                        console.log('message');
                        console.log(message);

                        return (
                            <div key={message.id} className={`message ${(message.senderId === this.props.chatkitUser.id) ? 'me' : 'not-me'}`}>
                                <div className="date-string">{date.toLocaleDateString()}</div>
                                <div className="author-block">{`${message.senderId}, ${date.toLocaleTimeString()}`}</div>
                                <div className="message-block"><div className="inner">{message.text}</div></div>
                                {
                                    !!message.attachment ?
                                        <div><img className="image" src={`${message.attachment.link}?dummy=${Math.random()}`}/></div> :
                                        null
                                }
                            </div>
                        )
                    })}
                </ScrollToBottom>
                <SendMessageForm chatkitUser={this.props.chatkitUser} />
            </React.Fragment>
        );
    }
}