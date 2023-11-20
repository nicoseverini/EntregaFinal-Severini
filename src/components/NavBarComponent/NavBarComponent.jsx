import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";

const NavBarComponent = () => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{height : "60px",}}>
      <Container>
        <Navbar.Brand style={{fontSize : "22px",}}><Link to={'/'} style={{textDecoration : "none", color : "black"}}> Random Store </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"  style={{paddingLeft : "50px",}}>
          <Nav.Link><Link to={'/'} style={{textDecoration : "none", color : "black"}}> Home </Link></Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link
                      to={`/category/${category}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {category}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
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