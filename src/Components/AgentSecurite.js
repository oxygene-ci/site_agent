import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Navbars from './Navbars';

function AgentSecurite() {
    return (
        <div>
            <Navbars />
            <div className='fs-5 p-5 mt-5'>
                <Container className='mt-4'>
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <Carousel controls indicators={false} className='shadow-lg rounded'>
                                {['14_1.jpeg', '14_2.jpeg'].map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            src={require(`../Assets/${image}`)}
                                            className='d-block w-100 rounded'
                                            alt={`Slide ${index + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col md={6} className='px-5'>
                            <h3 className='text-primary'>Agent de Sécurité de Bouaké</h3>
                            <hr />
                            <p>
                                Nos agents de sécurité peuvent assurer plusieurs rôles :
                                gardiennage, prévention des méfaits et maintien du bon comportement des clients,
                                tout en offrant un soutien aux commerçants.
                            </p>
                            <p>
                                Dans un hôpital, l'agent de sécurité assure le contrôle des accès,
                                le respect des normes sanitaires et la surveillance du bâtiment.
                                Besoin d'une gestion plus avancée des patients et visiteurs ?
                                Nous avons des agents spécialisés en gestion de crise, formés ITCA, OMEGA ou CPI.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className='container mt-3'>
                    <h3 className='text-center'>Agent de sécurité</h3>
                    <p>
                        Que vous soyez une entreprise ou un particulier, nos agents de sécurité et de prévention peuvent intervenir sur Bouaké afin de répondre à vos besoins de surveillance.
                        Que ce soit pour une mission ponctuelle ou un besoin régulier, notre équipe de sécurité vous propose d'assurer la sûreté de vos bâtiments, de vos biens ou des personnes de jours comme de nuit, 7jours sur 7 et 24h/24.
                    </p>
                    <p>
                        Tous nos agents sont détenteurs de la carte professionnelle d'agent de sécurité obligatoire délivrée par les services du CNAPS (Conseil national des activités privées de sécurité).
                        Également appelés vigiles, nos agents de sécurité sont polyvalents, courtois et patients. Ils sont régulièrement soumis à des pressions de la part des clients, des salariés…
                        C'est pourquoi nous sélectionnons rigoureusement nos équipes en nous basant sur leurs compétences professionnelles, mais aussi sur leur capacité à gérer sereinement des situations délicates.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AgentSecurite;