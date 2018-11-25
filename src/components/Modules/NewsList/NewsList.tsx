import * as React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import {LayoutHeader} from '../Header/LayoutHeader';

interface IProps {
    chatkitUser: any;
}

interface IState {
    isLoading: boolean;
    messages: any;
}

export class NewsList extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            isLoading: true,
            messages: []
        }
    }

    componentDidMount () {
        this.props.chatkitUser.subscribeToRoom({
            roomId: 19385736,
            hooks: {
                // Подписываемся на получение нового сообщения.
                onNewMessage: (message: any) => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            },
            messageLimit: 20
        });
    }

    render() {
        return (
            <React.Fragment>
                <LayoutHeader label="Лента"/>
                <ScrollToBottom mode="bottom" className="news-list scrollable-chat-view">
                    {this.state.messages.map((message: any) => {
                        const date = new Date(message.createdAt);

                        console.log('message');
                        console.log(message);

                        return (
                            <div key={message.id} className={`message ${(message.senderId === this.props.chatkitUser.id) ? 'me' : 'not-me'}`}>
                                <div className="date-string">{date.toLocaleDateString()}</div>
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
            </React.Fragment>
        );
    }
}