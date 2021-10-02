import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

import { Home } from '@mui/icons-material';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import BookApp from '../pages/BookApp'
import DemoComponent from '../pages/demo/demoComponents'
import '../css/App.css';

export default class AppNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            UserID: props.UserID,
            UserName: props.UserName
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                        <Container>
                            <Navbar.Brand href="/"><Home /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                                <Nav className="me-auto">
                                    <Nav.Link href="/books">DB Books</Nav.Link>
                                    <Nav.Link href="/demo">Components</Nav.Link>
                                    <NavDropdown title="Dữ liệu" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Văn bản</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Công việc</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Hồ sơ</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Báo cáo</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav className="justify-content-end" variant="dark">
                                    <Navbar.Brand >
                                        <FontAwesomeIcon icon={faEnvelope} className="faIcon"/> support@dieuhanhvp.net
                                    </Navbar.Brand>

                                    <Navbar.Brand >
                                        <FontAwesomeIcon icon={faPhone} className="faIconRed"/> 0983.494.080
                                    </Navbar.Brand>
                                    <NavDropdown title={this.state.UserName} id="user-nav-dropdown" className="user-nav-dropdown">
                                        <NavDropdown.Item href="/users/changepassword">Đổi mật khẩu</NavDropdown.Item>
                                        <NavDropdown.Item href="/users/userpreferences">Cấu hình cá nhân</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/users/logout">Đăng xuất</NavDropdown.Item>
                                    </NavDropdown>
                                    
                                </Nav>
                            </Navbar.Collapse>



                        </Container>
                    </Navbar>


                    <Switch>
                        <Route exact path="/books" component={BookApp} />
                        <Route path="/demo" component={DemoComponent} />
                    </Switch>
                </div>
            </Router>


        );
    }

}

