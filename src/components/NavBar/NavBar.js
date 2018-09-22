import React from "react"
import {Navbar, Nav, NavItem} from "react-bootstrap";
import './NavBar.css';

const NavBar = props => (
  
  <Navbar className="NavBar navbar-fixed-top">
    <Navbar.Header>
      <Navbar.Brand>
      <i class="fab fa-react"></i> Click an image to begin!
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem>
      Current Score: {props.score}
      </NavItem>
      <NavItem>
      Best Score: {props.highscore}
      </NavItem>
      <NavItem>
      {props.message}
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavBar;