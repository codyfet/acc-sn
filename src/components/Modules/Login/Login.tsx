import * as React from 'react';
import {FormGroup} from 'react-bootstrap';
import {SimpleButton} from '../../Core/SimpleButton';
import {LoginData} from '../../../models/Common';
import {Input} from '../../Core/Input';


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
                username: null,//'a.volkov',
                password: null//'1'
            },
            toMainPage: false
        }
    }

    handleUsernameChange = (value: string): void => {
        this.setState({
            loginData: {
                ...this.state.loginData,
                username: value
            }
        })
    }

    handlePasswordChange = (value: string): void => {
        this.setState({
            loginData: {
                ...this.state.loginData,
                password: value
            }
        })
    }

    handleEnterClick = () => {
        this.props.onEnterClick(this.state.loginData);
    }
    
    render () {
        const {loginData} = this.state;
        return (
            <form className="login-form">
                <FormGroup>
                    <Input
                        value={loginData.username}
                        placeholder="Имя пользователя"
                        onChange={this.handleUsernameChange}
                    />
                    <Input
                        value={loginData.password}
                        placeholder="Имя Пароль"
                        onChange={this.handlePasswordChange}
                    />
                    <SimpleButton onClick={this.handleEnterClick} label="Вход" iconClass="fa-sign-in"/>
                </FormGroup>
          </form>
        )
    }
}