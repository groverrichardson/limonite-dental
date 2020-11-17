import React from 'react';
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import RequestButton from './request-button';

export default class TopMenu extends React.Component {
    render() {
        return (
            <Navbar className="py-3" expand="lg">
                <NavbarBrand className="logo ml-md-5">
                    Limonite Dental
                </NavbarBrand>
                <NavbarBrand className="mobile-logo mr-0">Logo</NavbarBrand>
                <NavbarToggle
                    aria-controls="basic-navbar-nav"
                    className="toggle"
                />
                <NavbarCollapse
                    id="basic-navbar-nav"
                    className="justify-content-center"
                >
                    <Nav>
                        <NavLink className="nav-link" href="#">
                            Services
                        </NavLink>
                        <NavLink className="nav-link" href="#">
                            Team
                        </NavLink>
                        <NavLink className="nav-link" href="#">
                            Financing
                        </NavLink>
                        <NavLink className="nav-link" href="#">
                            Blog
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
                <RequestButton />
            </Navbar>
        );
    }
}
