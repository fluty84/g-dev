import { Container, Figure, Nav, Navbar, NavDropdown, Fade } from "react-bootstrap"
import React, { useState, useContext, useEffect } from 'react';

import spainFlag from './spainflag.png'
import ukFlag from './ukflag.png'
import text from './text.json'
import { DarkModeToggle } from "react-dark-mode-toggle-2";


import { myContext } from "../../context";

import './NavbarComp.scss'


const NavbarComp = () => {

    const { sp, eng } = text

    const { setLang, lang, setColorScheme, colorScheme } = useContext(myContext)

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [flag, setFlag] = useState(ukFlag)
    const [langT, setLangT] = useState(sp)

    useEffect(() => {

        if (navigator.language.slice(0, 2) != "es") { changeLng() }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkMode(true)
            setColorScheme("dark")
        }
    }, [])

    const changeLng = () => {
        flag === spainFlag ? setFlag(ukFlag) : setFlag(spainFlag)
        lang === "sp" ? setLang("eng") : setLang("sp")
        lang === "sp" ? setLangT(eng) : setLangT(sp)
    }

    const changeColorScheme = () => {
        setIsDarkMode(!isDarkMode)
        isDarkMode ? setColorScheme("light") : setColorScheme("dark")
    }

    return (
        <>

            <Navbar className="navbar fixed-top" collapseOnSelect expand="lg" bg={colorScheme} variant={colorScheme}>
                <Container id="navigation">
                    <Navbar.Brand href="#projects"><h3>G-DEV</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={`collapse navbar-collapse bg-${colorScheme}`}>
                        <Nav className={`me-auto bg-${colorScheme}`} bg={colorScheme} variant={colorScheme}>
                            <Nav.Link href="#project"><h5>{langT.projects}</h5></Nav.Link>
                            <Nav.Link href={require("../../assets/cvEduardo5.pdf")} target='_blank'><h5>{langT.resume}</h5></Nav.Link>
                        </Nav>
                        <Nav >
                            <NavDropdown title={langT.contact} id="collasible-nav-dropdown" >
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
                        <DarkModeToggle
                            className="darkModeToggle"
                            onChange={changeColorScheme}
                            isDarkMode={isDarkMode}
                            size={65}
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavbarComp