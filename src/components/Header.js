import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">User Management</Navbar.Brand>
      <Nav className="ml-auto">
        <Link className="nav-link" to="/">
          Login
        </Link>
        <Link className="nav-link" to="/register">
          Register
        </Link>
        <Link className="nav-link" to="/account">
          Account
        </Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
