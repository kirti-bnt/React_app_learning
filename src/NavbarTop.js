import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "./NavbarTop.css";

function NavbarTop() {
  let history = useHistory();
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">THE STORE</Navbar.Brand>
          <div className="search">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 search-bar"
                // style="width:30vh" //generates error and raises fallen ui error boundaries
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </div>

          <Nav className="me-auto">
            <Nav.Link onClick={() => history.push("/loginPage")}>
              Login
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/customerDashboard")}>
              Dashboard
            </Nav.Link>
          </Nav>

          <div className="cart-icon">
            <img className="cart-img" src="logo.png" alt="cart" />
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
