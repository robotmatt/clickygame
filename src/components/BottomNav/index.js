import React from "react";
import { Navbar, Nav, Container, FormControl, Button } from "react-bootstrap";

const BottomNav = () => (
	<Container>
  		<Navbar expand="sm" variant="light" bg="light" fixed="bottom">
    		<Navbar.Brand href="#">Cool Beans</Navbar.Brand>
  		</Navbar>
	</Container>
);

export default BottomNav;