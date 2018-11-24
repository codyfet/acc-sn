import * as React from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

interface IProps {
    onEnterClick: () => void;
}

interface IState {
    username: string;
    password: string;
    toMainPage: boolean;
}

export class Login extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            username: null,
            password: null,
            toMainPage: false
        }
    }

    handleUsernameChange = (event: any): void => {
        this.setState({
            username: event.currentTarget.value
        })
    }

    handlePasswordChange = (event: any): void => {
        this.setState({
            password: event.currentTarget.value
        })
    }

    handleEnterClick = () => {
        this.props.onEnterClick();
    }

    render () {   
        return (
            <form className="login-form">
                <FormGroup>
                    <FormControl
                        type="text"
                        value={null}
                        placeholder="Имя пользователя"
                        onChange={this.handleUsernameChange}
                    />
                    <FormControl
                        type="text"
                        value={null}
                        placeholder="Пароль"
                        onChange={this.handlePasswordChange}
                    />
                    <Button onClick={this.handleEnterClick}>Вход</Button>
                </FormGroup>
          </form>
        )
    }
}