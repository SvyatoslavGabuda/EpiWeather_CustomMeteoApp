import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const loc = useLocation();
  return (
    <Navbar bg="light" expand="lg" className="myNav">
      <Container>
        <Link to="/" className="navbar-brand">
          {" "}
          <i className="bi bi-globe"></i> EpiWeather
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={` nav-link text-decoration-none ${loc.pathname === "/" ? "active" : ""}`}
            >
              <span>Home</span>
            </Link>
            <Link
              to="/map"
              className={` nav-link text-decoration-none ${
                loc.pathname === "/map" ? "active" : ""
              }`}
            >
              <span>Map</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
