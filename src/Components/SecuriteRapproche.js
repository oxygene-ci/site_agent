import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Navbars from './Navbars';

function SecuriteRapproche() {
  return (
    <div>
      <Navbars />
      <div className='fs-5 p-5 mt-5'>
        <Container className='mt-4'>
          <Row className='align-items-center'>
            <Col md={6} className='px-5'>
              <h3 className='text-primary'>Securité rapprochée de Bouaké</h3>
              <hr />
              <p>
                Vous êtes un acteur ou une actrice cinématographique en Côte d'Ivoire, notre société de protection rapprochée SPSP-CI située à Bouaké assure votre sécurité privée au quotidien tout en respectant votre intégrité.
              </p>
              <p>
                <span className='fw-bold'>Protection rapprochée de Bouaké</span> et sécurité privée Pour des rendez-vous, shootings photos et déplacements professionnels ou privés sur Bouaké, les gardes du corps privés de notre société de protection rapprochée Bouaké sont à vos côtés pour vous escorter et assurer la protection adequate.
              </p>
              <p>
                En effet, après plusieurs années de spécialisation et de déploiement dans la sécurité privée en Côte d'Ivoire puis sur le territoire national, SPSP-CI a su se faire une solide réputation. En plus d'assurer des missions de sécurité privée relevant de postes d'agents de sûreté pour sécuriser les personnes et biens.
              </p>
            </Col>
            <Col md={6}>
              <Carousel controls indicators={false} className='shadow-lg rounded overflow-hidden'>
                {['17_03.jpg', '14_1.jpeg', '17_3.jpg'].map((image, index) => (
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
        <div className='container mt-3'>
          <h3 className='text-center'>Societe de garadiennage de Bouaké</h3>
          <p>
            les événements ou effectuer de la surveillance, nous avons nous assurons avec beaucoup de soin les missions de <span className='fw-bold'>sécurité rapprochée</span>.
            C'est ainsi que la protection rapprochée est devenu notre coeur de métier et désormais partout en Côte d'Ivoire.
          </p>
          <p>
            Nous assurons la protection rapprochée de quiconque en développe le besoin. Que cela vous concerne directement, ou que ce soit pour garantir la sécurité de votre famille, de vos proches, de vos salariés, de vos partenaires ou bien de votre résidence.
            Pour cela, <span className='fw-bold'>SPSP-CI</span> déploie des agents et des équipes qui vous accompagnent de manière ponctuelle (événement, rencontre, conférence…) ou permanente afin de prévenir des dangers éventuels et vous garantir une parfaite sérénité.
            Ainsi, notre societe de gardiennage de Bouaké met en place des systèmes de sécurité rapprochée vous permettant de profiter des moments importants en toute quiétude.
            Découvrez ci-dessous nos prestations de sécurité rapprochée, et contactez-nous sans plus attendre afin d'obtenir une solution de sécurité en phase avec vos besoins.

          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SecuriteRapproche
