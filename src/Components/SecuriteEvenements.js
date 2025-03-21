import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Navbars from './Navbars';

function SecuriteEvenements() {
  return (
    <div>
      <Navbars />
      <div className='fs-5 p-5 mt-5'>
        <Container className='mt-4'>
          <Row className='align-items-center'>
            <Col md={6} className='px-5'>
              <h3 className='text-primary'>Sécurité des Événements</h3>
              <hr />
              <p>
                L'agent de sécurité chargé de l'événementiel doit gérer un grand nombre de personnes sur un même site.
                Parfois, ce sont plusieurs dizaines de milliers de visiteurs qui se réunissent pour un concert, une exposition ou un salon spécialisé.
              </p>
              <p>
                La sécurité est primordiale dans un projet événementiel. Une grande foule réunie peut être source de conflits.
              </p>
              <p>
                L'agent de sécurité en place doit contrôler la foule, organiser les fouilles des personnes suspectes et assurer le bon déroulement de l'événement.
                Il doit rester attentif à l'ensemble des personnes présentes.
              </p>
            </Col>
            <Col md={6}>
              <Carousel controls indicators={false} className='shadow-lg rounded overflow-hidden'>
                {['secu_evenemt.jpg', 'Securite-evenementiel.jpg', 'eve.jpg'].map((image, index) => (
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
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default SecuriteEvenements
