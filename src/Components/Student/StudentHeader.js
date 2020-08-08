import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function StudentHeader(props) {
    return (
        <Navbar bg="light">
            <Navbar.Brand>Student</Navbar.Brand>
            <NavItem>
                <NavLink className="nav-link" to="/student">
                    <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
            </NavItem>
        </Navbar>
    );
}