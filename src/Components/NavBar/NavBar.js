import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


function NavBar () {
return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">FAUSTINA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/SobreNosotros">Sobre Nosotros</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Productos</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/productos/Zapatos">Zapatos</Link></li>
            <li><Link className="dropdown-item" to="/productos/Sandalias">Sandalias</Link></li>
            <li><Link className="dropdown-item" to="/productos/Borcegos">Borcegos</Link></li>
            <li><Link className="dropdown-item" to="/productos/Carteras">Carteras</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Cart">
            <CartWidget/>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

}

export default NavBar;