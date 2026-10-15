import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/fptsd.jpeg'
import {
  FaHome,
  FaGraduationCap,
  FaUserGraduate,
  FaUsers,
  FaUsersCog,
  FaUserLock
} from 'react-icons/fa'
import './Navbar.css'

function NavbarFPTSD() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992)

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 992)
          }
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
    }, [])

  const [showFormation, setShowFormation] = useState(false)
  const [showAccueil, setShowAccueil] = useState(false)
  const [showAdmission, setShowAdmission] = useState(false)
  const [showCollaboration, setShowCollaboration] = useState(false)
  const [showPopulation, setShowPopulation] = useState(false)
  const [showAdministration, setShowAdministration] = useState(false)

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to=""
        className="d-flex align-items-center gap-2"
        >
          <img
            src={logo}
            alt="Logo FPTSD"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">

            {/* ACCUEIL */}
            <NavDropdown
              title={
                <span className="nav-link-custom">
                  <FaHome className="nav-icon" />
                  Accueil
                </span>
              }
              show={isDesktop ? showAccueil : undefined}
              onMouseEnter={() => isDesktop && setShowAccueil(true)}
              onMouseLeave={() => isDesktop && setShowAccueil(false)}
              id="accueil-dropdown"
            >
              <NavDropdown.Item as={NavLink} to=" ">
                Bibliothèque
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Organigramme
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Alumni (témoignages d’anciens(réussites))
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Accès au Campus
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Vie de Campus
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Un peu d'Histoire (storytelling)
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Services Médicaux / Sociaux
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Cité Universitaire
              </NavDropdown.Item>

            </NavDropdown>

            {/* ADMISSION */}
            <NavDropdown
              title={
                <span className="nav-link-custom">
                  <FaUserGraduate className="nav-icon" />
                  Admission
                </span>
              }
              show={isDesktop ? showAdmission : undefined}
              onMouseEnter={() => isDesktop && setShowAdmission(true)}
              onMouseLeave={() => isDesktop && setShowAdmission(false)}
              id="admission-dropdown"
            >
              <NavDropdown.Item as={NavLink} to=" ">
                Du Lycée à l’Université
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                S’inscrire en premier cycle
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                S’inscrire en Masters
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                S’inscrire en Doctorat
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Accueil d’étudiants mixte et équitable
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Coût de la formation
              </NavDropdown.Item>

            </NavDropdown>

            {/* FORMATION */}
            <NavDropdown
              title={
                <span className="nav-link-custom">
                  <FaGraduationCap className="nav-icon" />
                  Formation
                </span>
              }
              show={isDesktop ? showFormation : undefined}
              onMouseEnter={() => isDesktop && setShowFormation(true)}
              onMouseLeave={() => isDesktop && setShowFormation(false)}
              id="formation-dropdown"
              >
              <NavDropdown.Item as={NavLink} to=" ">
                Choisir la FPTSD
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Cursus professionnalisant
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Orientation
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Equipements et infrastructures
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Ressources complémentaires
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Activités
              </NavDropdown.Item>

            </NavDropdown>

            {/* COLLABORATION */}
            <NavDropdown
              title={
                <span className="nav-link-custom">
                  <FaUsers className="nav-icon" />
                  Collaboration
                </span>
              }
              show={isDesktop ? showCollaboration : undefined}
              onMouseEnter={() => isDesktop && setShowCollaboration(true)}
              onMouseLeave={() => isDesktop && setShowCollaboration(false)}
              id="collaboration-dropdown"
            >
              <NavDropdown.Item as={NavLink} to=" ">
                Dimension nationale
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Dimension internationale
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Entreprises
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Recrutement des étudiants
              </NavDropdown.Item>

            </NavDropdown>

            {/* POPULATION */}
            <NavDropdown
              title={
                <span className="nav-link-custom">
                  <FaUsersCog className="nav-icon" />
                  Population
                </span>
              }
              show={isDesktop ? showPopulation : undefined}
              onMouseEnter={() => isDesktop && setShowPopulation(true)}
              onMouseLeave={() => isDesktop && setShowPopulation(false)}
              id="population-dropdown"
            >
              <NavDropdown.Item as={NavLink} to=" ">
                Equipe enseignante et pédagogique
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Equipe administrative
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Etudiants (L1 en Doctorat)
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to=" ">
                Association des étudiants
              </NavDropdown.Item>

            </NavDropdown>

            {/* ADMINISTRATION */}
            <NavDropdown
              title={
                <span className="nav-link-custom">
                  <FaUserLock className="nav-icon" />
                  Administration
                </span>
              }
              show={isDesktop ? showAdministration : undefined}
              onMouseEnter={() => isDesktop && setShowAdministration(true)}
              onMouseLeave={() => isDesktop && setShowAdministration(false)}
              id="administration-dropdown"
            >
              <NavDropdown.Item as={NavLink} to="/login">
                Se connecter
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarFPTSD