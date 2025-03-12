import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='m-auto'>
                <Nav.Link href="home.js">Home</Nav.Link>
                <NavDropdown title="Installer" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l">Windows(32Bits)</NavDropdown.Item>
                    <NavDropdown.Item href="https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l">Windows(64Bits)</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l">MacOS(32Bits)</NavDropdown.Item>
                    <NavDropdown.Item href="https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l">MacOS(64Bits)</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l">Prérequis</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="news.js">News</Nav.Link>
                <Nav.Link href="forum.js">Forum</Nav.Link>
                <NavDropdown title="Support" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://discord.gg/Zq99VtyT5x">Discord</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l">Autre Contacts</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Menu;