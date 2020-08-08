import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function WardenHeader(props) {
    return (
        <Navbar bg="light">
            <Navbar.Brand>Warden</Navbar.Brand>
            <NavItem>
                <NavLink className="nav-link" to="/warden">
                    <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
            </NavItem>
        </Navbar>
    );
}