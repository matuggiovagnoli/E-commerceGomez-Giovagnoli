import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";


function NavBar () {
return(
<Navbar className="NavBar--Container" sticky="top" expand="sm">
  <Container fluid>
    <Navbar.Brand className="Brand" href="#home" id="marca">FAUSTINA</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
        <NavDropdown title="Producos" id="basic-nav-dropdown">
          <NavDropdown.Item href="catalogozapatos">Zapatos</NavDropdown.Item>
          <NavDropdown.Item href="catalogocarteras">Carteras</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <CartWidget/>
</Navbar>
);

}

export default NavBar;