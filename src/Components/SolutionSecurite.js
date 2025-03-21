import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Navbars from './Navbars';

function SolutionSecurite() {
  return (
    <div>
      <Navbars />
      <div className='fs-5 p-5 mt-5'>
        <Container className='mt-4'>
          <Row className='align-items-center'>
            <Col md={6}>
              <Carousel controls indicators={false} className='shadow-lg rounded'>
                {['img3.jpeg', '14_7.jpeg'].map((image, index) => (
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
              <h3 className='text-primary'>Solution de securité de Bouaké</h3>
              <hr />
              <p>
                SPSP-CI est une société de gardiennage et sécurité, qui assure la sécurité de votre entreprise 24h/24 et 7j/7.
                Nous mettons rapidement à votre disposition un vigile, un agent de sécurité filtrage, un agent SSIAP, un agent maitre-chien pour sécuriser votre lieu de travail et ainsi limiter les intrusions et les actes de malveillance.
                Tous les agents de notre <span className='fw-bold'>societe de gardiennage de Bouaké</span> sont détenteurs de la carte professionnelle.
              </p>
              <p>
                En effet, SPSP-CI construit une solution sur-mesure, complète et spécifique à travers une organisation performante, une mobilisation et un engagement total de ses équipes.
                Nous somme specilaiser en <span className='fw-bold'>Contrôle d'accès</span>, <span className='fw-bold'>ronde de sécurité</span>, ronde d'ouverture et de vérification, intervention sur alarme, mise en place d'un système de vidéosurveillance, SPSP-CI SURVEILLANCE peut mettre en place toute type d'équipement et d'équipes de sécurité.
              </p>
            </Col>
          </Row>
        </Container>
        <div className='container mt-3'>
          <h3 className='text-center'>Societe de securité de Bouaké</h3>
          <p>
            Il peut être difficile de choisir une société de sécurité privée à Bouaké, mais notre service de comparaison de devis facilite le processus et le rend plus efficace.
            Grâce à notre accompagnement, vous trouverez une entreprise de sécurité à Bouaké pour faire face à une variété de risques et de sinistres, tels que les accidents du travail, les incendies, les risques écologiques et économiques.
            Toutes les entreprises que nous recommandons respectent les réglementations en vigueur pour assurer la protection des personnes et des biens.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SolutionSecurite
