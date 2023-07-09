// libreria ract-bootstrap
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="bg-dark" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-light">
                00:20
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
