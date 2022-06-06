import React from 'react'
import {Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
//import Counter from './components/NavBar/ItemListContainer/ItemCount.jsx';
//import CartWidget from './src/components/NavBar/CartWidget.jsx';//
//import Cart from './src/components/NavBar/NavBar/Cart.jsx';



function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Beats&Hooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Top Beats1</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Buy</NavDropdown.Item>
          <NavDropdown.Item href="#action4">New Features</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Mixing&Arrangements
          </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
          <Container>
            
         
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>

   
   
          </Container>
          
          </Nav.Item> 
          

        
              </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar