import { Container, Figure, Nav, Navbar, NavDropdown, OverlayTrigger } from "react-bootstrap"
import React, { useState } from 'react';
import spainFlag from './spainflag.png'
import ukFlag from './ukflag.png'
import text from './text.json'
import './NavbarComp.scss'
import { Tooltip } from "bootstrap";

const NavbarComp = () => {
    const { sp, eng } = text

    const [flag, setFlag] = useState(ukFlag)
    const [leng, setLeng] = useState(sp)


    const changeLng = () => {
        flag === spainFlag ? setFlag(ukFlag) : setFlag(spainFlag)
        leng === sp ? setLeng(eng) : setLeng(sp)
    }

    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
                <Container className="navigation">
                    <Navbar.Brand href="#home">G-DEV</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">{leng.proyects}</Nav.Link>
                            <Nav.Link href="#pricing">{leng.resume}</Nav.Link>

                        </Nav>
                        <Nav>
                            <NavDropdown title={leng.contact} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="https://github.com/fluty84" target="_blank">GitHub</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.linkedin.com/in/gordillo/" target="_blank">Linkedn</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.instagram.com/fluty84/" target="_blank">Instagram</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="mailto:edu.m.gordillo@gmail.com">E-Mail</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Figure onClick={changeLng} >
                                <img className="flag" src={flag} alt='flag'></img>
                        </Figure>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComp