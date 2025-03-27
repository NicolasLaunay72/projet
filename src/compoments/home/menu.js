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
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <NavDropdown title="Installer" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l">Windows(32Bits)</NavDropdown.Item>
                        <NavDropdown.Item href="https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l">Windows(64Bits)</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l">MacOS(32Bits)</NavDropdown.Item>
                        <NavDropdown.Item href="https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l">MacOS(64Bits)</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/installer">Prérequis</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/news">News</Nav.Link>
                    <Nav.Link href="/forum">Forum</Nav.Link>
                    <NavDropdown title="Support" id="basic-nav-dropdown">
                    <NavDropdown title="Discord" id="Discord"><iframe src="https://discord.com/widget?id=1338868985005084706&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></NavDropdown>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/support">Autre Contacts</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default Menu;