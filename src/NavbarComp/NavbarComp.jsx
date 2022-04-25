import { Container, Figure, Nav, Navbar, NavDropdown, OverlayTrigger } from "react-bootstrap"
import React, { useState, useContext, useEffect } from 'react';
import spainFlag from './spainflag.png'
import ukFlag from './ukflag.png'
import text from './text.json'
import './NavbarComp.scss'
import { myContext } from "../context";


const NavbarComp = () => {

    const { sp, eng } = text
    
    const { setLang, lang } = useContext(myContext)

    const [flag, setFlag] = useState(ukFlag)
    const [langT, setLangT] = useState(sp)

    useEffect(() => {
        console.log('language', navigator.language.slice(0, 2))
        if (navigator.language.slice(0, 2) != "es") { changeLng() }
    }, [])

    const changeLng = () => {
        flag === spainFlag ? setFlag(ukFlag) : setFlag(spainFlag)
        lang === "sp" ? setLang("eng") : setLang("sp")
        lang === "sp" ? setLangT(eng) : setLangT(sp)
    }

    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
                <Container className="navigation">
                    <Navbar.Brand href="#home">G-DEV</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">{langT.proyects}</Nav.Link>
                            <Nav.Link href="#pricing">{langT.resume}</Nav.Link>

                        </Nav>
                        <Nav>
                            <NavDropdown title={langT.contact} id="collasible-nav-dropdown">
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