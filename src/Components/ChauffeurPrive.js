import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Navbars from './Navbars';

function ChauffeurPrive() {
  return (
      <div>
          <Navbars />
          <div className='fs-5 p-5 mt-5'>
              <Container className='mt-4'>
                  <Row className='align-items-center'>
                      <Col md={6}>
                          <Carousel controls indicators={false} className='shadow-lg rounded overflow-hidden'>
                              {['chauff_privé.jpg', 'chauf_prive.jpg', 'chauf_privee.jpg'].map((image, index) => (
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
                          <h3 className='text-primary'>Chauffeur Privé à Bouaké, Côte d'Ivoire</h3>
                          <hr />
                          <p>
                              Le transport est un élément clé de notre <span className='fw-bold'>société de gardiennage à Bouaké</span>.
                              Que ce soit pour le travail, un rendez-vous important ou une occasion spéciale,
                              de plus en plus de personnes font appel à nos services de chauffeur privé.
                          </p>
                          <p>
                              Nos <span className='fw-bold'>chauffeurs privés</span> offrent de nombreux avantages :
                              sécurité, confort, commodité et fiabilité. Expérimentés dans le transport de première classe,
                              ils conduisent des véhicules haut de gamme et assurent une attention personnalisée.
                          </p>
                          <p>
                              Nos chauffeurs sont formés à la conduite défensive et s'engagent à fournir un service
                              de qualité supérieure pour garantir la sécurité et le confort de leurs passagers.
                          </p>
                      </Col>
                  </Row>
              </Container>
              <Container className='mt-3'>
                  <p>
                      En somme, notre <span className='fw-bold'>société de gardiennage</span> et nos services de
                      <span className='fw-bold'>chauffeur privé</span> garantissent une expérience de transport haut de gamme.
                      Que ce soit pour des déplacements professionnels, des événements spéciaux ou des vacances,
                      nous offrons une solution pratique et fiable pour répondre à vos besoins.
                  </p>
              </Container>
          </div>
          <Footer />
      </div>
  )
}

export default ChauffeurPrive
