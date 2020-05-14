import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

function View(props, state) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
        <Nav className="m-auto">
          <Nav.Link href="/">{props.status}</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/">Score: {props.score}</Nav.Link>
          <Nav.Link href="/">Top Score: {props.topScore}</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default View;
