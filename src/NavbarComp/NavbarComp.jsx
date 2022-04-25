import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"



const NavbarComp = () =>{

    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">G-DEV</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Proyectos</Nav.Link>
                            <Nav.Link href="#pricing">Curriculum</Nav.Link>
                          
                        </Nav>
                        <Nav>
                            <NavDropdown title="Contacta" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">GitHub</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Linkedn</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">E-Mail</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComp