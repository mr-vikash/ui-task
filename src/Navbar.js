import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <div className="container-fluid">
        <Navbar.Brand href="#home">Dashboard V2</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex mx-auto">
            <FormControl
              type="search"
              placeholder="Search anything..."
              className="mr-2"
              aria-label="Search"
            />
          </Form>
          <Nav className="ml-auto">
            <Button variant="outline-primary" className="me-2">Last 7 Days</Button>
            <Nav.Link href="#profile">
              <img
                src="https://via.placeholder.com/40" // Placeholder image; replace with the actual image URL
                alt="Profile"
                className="rounded-circle"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
