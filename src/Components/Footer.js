import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare, FaEnvelopeSquare } from 'react-icons/fa';
import logo from "../Assets/agent_securite_2.jpg";

const Footer = () => {
    return (
        <>
            <section className="footer bg-dark text-white pt-5 pb-3">
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={4} className="footers-one">
                            <div className="footers-logo">
                                <img src={logo} style={{ width: '120px' }} className="d-inline-block mx-3" alt="Logo SPSP-CI" />
                            </div>
                            <div className="footers-info mt-3">
                                <p>Societe de gardiennage SPSP-CI experimenter dans la surveillance et la protection des biens et des personnes Partout en Côte d'Ivoire.</p>
                            </div>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/"><FaFacebookSquare className="social" /></a>
                                <a href="https://twitter.com/"><FaTwitterSquare className="social" /></a>
                                <a href="https://plus.google.com/"><FaGooglePlusSquare className="social" /></a>
                                <a href="mailto:bootsnipp@gmail.com"><FaEnvelopeSquare className="social" /></a>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={2} className="footers-three">
                            <h5>Lien rapide</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Accueil</a></li>
                                <li><a href="/about">Qui sommes-nous ?</a></li>
                                <li><a href="/service">Services</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact">Contactez-nous</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={2} className="footers-four">
                            <h5>Nos services</h5>
                            <ul className="list-unstyled">
                                <li><a href="/agent_securite">Agent de Sécurité</a></li>
                                <li><a href="/chauffeur_prive">Chauffeur Privé</a></li>
                                <li><a href="securite_evenements">Sécurité des évènements</a></li>
                                <li><a href="/secuite_rapproche">Sécurité Rapprochée</a></li>
                                <li><a href="/solution_securité">Solution de Sécurité</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={2} className="footers-five">
                            <h5>Nos contact</h5>
                            <ul className="list-unstyled">
                                <li><a href='local.html'>
                                    Bouaké (gnamien akakro)
                                    sur la voie de l'aéroport
                                </a></li>
                                {/* <li><a href="about.html">For Parters</a></li>
                                <li><a href="about.html">Terms</a></li> */}
                                <br />
                                <li>Email:<a href="mailto:yenakpekone72@gmail.com">yenakpekone72@gmail.com </a></li>
                                <li>Tel : <a href="number.html">(+225) 0707446125</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

                <section className="disclaimer bg-dark border">
                    <Container>
                        <Row>
                            <Col md={12} className="text-center py-2">
                                <small>
                                    © Copyright SPSP-CI. All Rights Reserved
                                    Designed by garadiennage
                                </small>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </>
    );
};

export default Footer;
