import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarTop(){
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='title' href="#home">Task Manager</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#">
          <i className="bi bi-house"></i> Home
          </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavbarTop;