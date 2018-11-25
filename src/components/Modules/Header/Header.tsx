import * as React from 'react';
import {Navbar, FormGroup, Button} from 'react-bootstrap';
import {Input} from '../../Core/Input';

interface IState {
    searchText: string;
}
/**
 * Компонент хедер приложения.
 */
export class Header extends React.Component<{}, IState> {

    constructor (props: any) {
        super (props);

        this.state = {
            searchText: ''
        }
    }

    handleChangeSearch = (searchText: string) => {
        this.setState({searchText});
    }

    render () {
        const {searchText} = this.state;

        return (
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
                            <Input value={searchText} onChange={this.handleChangeSearch}  placeholder="Поиск людей, интересов"/>
                        </FormGroup>{' '}
                        <Button type="submit">Поиск</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>            
        );
    }
}
