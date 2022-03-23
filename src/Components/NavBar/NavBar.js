import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


function NavBar () {
return(
<Navbar className="NavBar--Container" sticky="top" expand="sm">
  <Container fluid>
  <img
        src="/imagenes/logofaustina.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <Navbar.Brand className="Brand" href="/" id="marca">FAUSTINA</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="SobreNosotros">Sobre Nosotros</Nav.Link>
        <NavDropdown title="Producos" id="basic-nav-dropdown">
          <NavDropdown title="Calzado">
            <NavDropdown.Item href="/productos/Zapatos">Zapatos</NavDropdown.Item>
            <NavDropdown.Item href="/productos/Sandalias">Sandalias</NavDropdown.Item>
            <NavDropdown.Item href="/productos/Borcegos">Borcegos</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown.Item href="carteras">Carteras</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <CartWidget/>
</Navbar>
);

}

export default NavBar;