import CartWidgetComponent from "../CartWidget/CartWidgetComponent";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBarComponent = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{height : "60px",}}>
      <Container>
        <Navbar.Brand href="#home"style={{fontSize : "22px",}}> Coffee Break </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"  style={{paddingLeft : "50px",}}>
          <Nav.Link href="#home"> Home </Nav.Link>
            <Nav.Link href="#aboutus"> About Us </Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#products/coffee">
                Coffee
              </NavDropdown.Item>
              <NavDropdown.Item href="#products/coffeecapsules">
                Coffee capsules
              </NavDropdown.Item>
              <NavDropdown.Item href="#products/coffeemakers">
                Coffee makers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">
              <CartWidgetComponent />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;