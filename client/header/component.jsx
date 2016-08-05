import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar
                className="primary02"
                staticTop={true}
                fluid={true}
                >
                <Nav>
                    <NavItem eventKey={1}><div className="bg-primary">Product Builder</div></NavItem>
                </Nav>
            </Navbar>
        );
    }
}

Header.displayName = 'Header';

// probably define login name and other stuff to display in the header.
Header.propTypes = {
};
