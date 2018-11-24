import * as React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
import {SimpleButton} from '../../Core/SimpleButton';
import {LoginData} from '../../../models/Common';

interface IProps {
    onEnterClick: (loginData: object) => void;
}

interface IState {
    loginData: LoginData;
    toMainPage: boolean;
}

export class Login extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            loginData: {
                username: null,
                password: null
            },
            toMainPage: false
        }
    }

    handleUsernameChange = (event: any): void => {
        this.setState({
            loginData: {
                ...this.state.loginData,
                username: event.currentTarget.value
            }
        })
    }

    handlePasswordChange = (event: any): void => {
        this.setState({
            loginData: {
                ...this.state.loginData,
                password: event.currentTarget.value
            }
        })
    }

    handleEnterClick = () => {
        this.props.onEnterClick(this.state.loginData);
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
                    <SimpleButton onClick={this.handleEnterClick} label="Вход" iconClass="fa-sign-in"/>
                </FormGroup>
          </form>
        )
    }
}