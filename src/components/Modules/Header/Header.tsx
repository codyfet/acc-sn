import * as React from 'react';
import {Navbar, FormGroup} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
import {User} from '../../../models/Common';
import {Redirect} from 'react-router-dom';

interface IProps {
    users: any;
}

interface IState {
    goToUserProfile: boolean;
    enterpriseId: string;
}

/**
 * Компонент хедер приложения.
 */
export class Header extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            goToUserProfile: false,
            enterpriseId: null
        }
    }

    handleChangeSearch = (selectedValue: string[]) => {
        this.setState({
            goToUserProfile: true,
            enterpriseId: selectedValue[0]
        })
    }

    render () {
        let options: string[] = [];

        if (!!this.props.users) {
            options = this.props.users.map(
                (user: User) => user.enterpriseId
            )
        }

        return (
            <React.Fragment>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="https://portal.accenture.com/">
                                <img className="accenture-logo" src="https://www.accenture.com/t20180820T080653Z__w__/ru-ru/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.PNG"/>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullRight>
                            <FormGroup>
                                <Typeahead
                                    labelKey="name"
                                    multiple={false}
                                    options={options}
                                    placeholder="Найти сотрудника"
                                    onChange={this.handleChangeSearch}
                                />
                            </FormGroup>{' '}
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
                {this.state.goToUserProfile && <Redirect to={`/profile/${this.state.enterpriseId}`} />}
            </React.Fragment>
        );
    }
}
