import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  // get user
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/inventory">
                Inventory
              </Nav.Link>
              {user && (
                <div className="d-flex">
                  <Nav.Link as={Link} to="/manageinventory">
                    Manage Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manageinventory">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myitems">
                    My Items
                  </Nav.Link>
                </div>
              )}

              {user ? (
                <Nav.Link onClick={() => signOut(auth)} as={Link} to="/login">
                  Logout
                </Nav.Link>
              ) : (
                <div className="d-flex">
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                </div>
              )}
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
