import * as React from 'react';
import {FormControl, Button} from 'react-bootstrap';

interface IProps {
    chatkitUser: any;
}


interface IState {
    message: string;
}

export class SendMessageForm extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            message: ''
        }
    }

    sendMessage () {
        const index: string = window.location.pathname.split('/')[2];
        const room = this.props.chatkitUser.rooms[parseInt(index)];

        this.props.chatkitUser.sendMessage({
            text: this.state.message,
            roomId: room.id
        })
    }

    
    handleChange = (e: any) => {
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit = (e: any) => {
        e.preventDefault()

        this.sendMessage();

        this.setState({
            message: ''
        })
    }
    handleSendButtonClick (e: any) {
        this.handleSubmit(e);
    }
    
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form"
            >
                <FormControl
                    className="message-area"
                    componentClass="textarea"
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Введите текст сообщения"
                />
                <Button className="text-btn" onClick={this.handleSendButtonClick}>отправить</Button>
                {/* {
                    !!this.props.typingUserName ? 
                        <span className="typing-indicator">{`${this.props.typingUserName} печатает...`}</span> : 
                        null
                } */}
            </form>
        )
    }
}