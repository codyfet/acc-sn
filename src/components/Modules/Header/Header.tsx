import * as React from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';

/**
 * Компонент хедер приложения.
 */
export class Header extends React.Component {
    render () {
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
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>            
        );
    }
}
