import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container,
} from 'reactstrap';

function NavbarComponent(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar expand='md'>
            <Container>
                <NavbarBrand href="/">{props.title}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                    <NavLink href="/components/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                        About Us
                    </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Admin</NavbarText>
                </Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default NavbarComponent;