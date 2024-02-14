import { Outlet, Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Layout = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="rounded mb-4"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/categories" className="me-auto">
            VIRTUAL STORE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <NavDropdown
                title={
                  <span>
                    <FaUser /> Profile
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/profile">
                  Your Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="flex-grow-1">
        <Outlet />
      </Container>

      <footer className="bg-dark text-light text-right p-3 mt-4 rounded">
        <Container>
          <p>&copy;VIRTUAL STORE ALL RIGHTS RECEIVED</p>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
