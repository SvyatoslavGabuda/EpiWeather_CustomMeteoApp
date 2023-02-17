import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const loc = useLocation();
  return (
    <Navbar bg="light" expand="lg" className="myNav">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <i className="bi bi-globe"></i> EpiWeather
        </Navbar.Brand>
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
