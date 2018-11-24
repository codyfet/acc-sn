import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

/**
 * Компонент хедер приложения.
 */
export class Header extends React.Component {
    render () {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            <Link to='/'>Домой</Link>
                        </NavItem>
                        <NavItem eventKey={1} href="#">
                            <Link to='/search'>Поиск фильмов</Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Link to='/profile'>Профиль</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>            
        );
    }
}
