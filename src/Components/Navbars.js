import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assets/agent_securite_2.jpg"; // Importation optimisée

const Navbars = () => {
    return (
        <Navbar expand="lg" className="bg-dark fixed-top" variant="dark">
            <Container fluid>
                {/* Logo + Titre */}
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src={logo} width="60" height="60" className="d-inline-block mx-3" alt="Logo SPSP-CI" />
                    <span className="text-white text-uppercase fw-bold fs-4">SPSP-CI Securite</span>
                </Navbar.Brand>

                {/* Bouton de menu responsive */}
                <Navbar.Toggle aria-controls="navbarScroll" />

                {/* Contenu de la navigation */}
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto p-2 my-2 my-lg-2" navbarScroll>
                        <Nav.Link as={Link} to="/" className="nav-hover fw-bold">
                            Accueil
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-hover fw-bold">
                            Qui sommes-nous ?
                        </Nav.Link>

                        {/* Dropdown Services */}
                        <NavDropdown title={<span className="text-white">Services</span>} id="navbarScrollingDropdown" className="nav-hover fw-bold">
                            {[
                                { path: "/agent_securite", label: "Agent de sécurité" },
                                { path: "/chauffeur_prive", label: "Chauffeur privé" },
                                { path: "/securite_evenements", label: "Sécurité des évènements" },
                                { path: "/securite_rapproche", label: "Sécurité rapprochée" },
                                { path: "/solution_securite", label: "Solution de sécurité" },
                            ].map((item, index) => (
                                <NavDropdown.Item key={index} as={Link} to={item.path}>
                                    {item.label}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>

                        <Nav.Link as={Link} to="/blog" className="nav-hover fw-bold">
                            Blog
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-hover fw-bold">
                            Contactez-nous
                        </Nav.Link>
                    </Nav>

                    {/* Bouton de devis */}
                    <Button variant="danger" as={Link} to="/contact" className="text-uppercase mx-4">
                        Demandez un devis
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbars;








// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// function Navbars() {
//   return (
//     <div>
//           <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
//               <Container fluid>
//                   <Navbar.Brand href="#home">
//                           <img
//                               src={require('../Assets/agent_securite_2.jpg')}
//                               width="60"
//                               height="60"
//                               className="d-inline-block align-top mx-3"
//                           />{' '}
//                       <span className='text-uppercase'><b>spsp-ci</b></span>
//                   </Navbar.Brand>
//                   <Navbar.Toggle aria-controls="navbarScroll" />
//                   <Navbar.Collapse id="navbarScroll">
//                       <Nav
//                           className="mx-auto p-3 my-2 my-lg-2"
//                           style={{ maxHeight: '100px' }}
//                           navbarScroll
//                       >
//                           <Nav.Link ><span style={{color:'white'}}><b>Accueil</b></span></Nav.Link>
//                           <Nav.Link href="#action2"><span style={{ color: 'white' }}><b>Qui sommes-nous ?</b></span></Nav.Link>
//                           <NavDropdown style={{ color: "white", fontWeight: "bold", textTransform: "" }} title="Services" id="navbarScrollingDropdown">
//                               <NavDropdown.Item href="#action3">Agnet de sécurité</NavDropdown.Item>
//                               <NavDropdown.Item href="#action4">
//                                   Chauffer privé
//                               </NavDropdown.Item>
//                               <NavDropdown.Item href="#action5">
//                                   Sécurité des évènements
//                               </NavDropdown.Item>
//                               <NavDropdown.Item href="#action6">
//                                   Sécurité rapprochée
//                               </NavDropdown.Item>
//                               <NavDropdown.Item href="#action7">
//                                   Solution de sécurité
//                               </NavDropdown.Item>
//                           </NavDropdown>
//                           <Nav.Link href="#" style={{ color: "white", fontWeight: "bold"}}>
//                               Blog
//                           </Nav.Link>
//                           <Nav.Link href="#" style={{ color: "white", fontWeight: "bold"}}>
//                               Contactez-nous
//                           </Nav.Link>
//                       </Nav>
//                           <Button variant="outline-danger" className='text-uppercase mx-4'>Demandez un devis </Button>
//                   </Navbar.Collapse>
//               </Container>
//           </Navbar>
//     </div>
//   )
// }

// export default Navbars;