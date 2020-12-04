import React from 'react';
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import RequestButton from './request-button';

export default class TopMenu extends React.Component {
    render() {
        return (
            <Navbar className="py-2" expand="lg">
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
                    <Nav className="align-items-md-center">
                        <NavLink className="nav-link link-one" href="#">
                            Services
                        </NavLink>
                        <NavLink className="nav-link link-two" href="#">
                            Team
                        </NavLink>
                        <NavLink className="nav-link link-three" href="#">
                            Financing
                        </NavLink>
                        <NavLink className="nav-link-four" href="#">
                            Blog
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
                <RequestButton customClass="request request-cta mr-md-5" />
            </Navbar>
        );
    }
}
