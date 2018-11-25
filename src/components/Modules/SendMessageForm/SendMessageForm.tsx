import * as React from 'react';

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
    
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}