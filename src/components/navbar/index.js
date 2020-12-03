import React from 'react';

import { Nav, NavItem } from './styles';

export default function Navbar() {
    return (
        <Nav>
            <NavItem data-testid="comics-link" to="/">
                Comics
            </NavItem>
            <NavItem data-testid="characters-link" to="/characters">
                Characters
            </NavItem>
        </Nav>
    );
}
