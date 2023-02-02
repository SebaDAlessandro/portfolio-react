import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
/* import { Link } from 'react-router-dom'; */
import './header.css'

const Header = () => {
  return (
    <section className='navbar__container'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#inicio">Inicio</Nav.Link>
                <Nav.Link href="#about">Sobre mí</Nav.Link>
                <Nav.Link href="#formation">Formación</Nav.Link>
                <Nav.Link href="#hardSkills">Habilidades Técnicas</Nav.Link>
                <Nav.Link href="#experience">Experiencia</Nav.Link>
                <Nav.Link href="#hobbies">Pasatiempos</Nav.Link>
                <Nav.Link href="#projects">Proyectos</Nav.Link>
                <NavLink to='/contact' className='navbar__contact'>Contácteme</NavLink>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  )
}

export default Header