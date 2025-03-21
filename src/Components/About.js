import React from 'react';
import Navbars from './Navbars';
import Footer from './Footer';
import { Row, Col, Carousel } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

function About() {
  return (
    <div>
      <Navbars />

      <div className="p-5">
        <h2 className="text-center p-5">Qui sommes-nous ?</h2>

        {/* Section principale */}
        <div className="container bg-lightgray text-black p-4 rounded">
          <h4 className="fw-bold">Notre entreprise</h4>
          <p className='fs-5'>
            <strong>SPSP-CI SECURITE de Bouaké</strong> est une société spécialisée dans la sécurité et la surveillance humaine, avec plus de 2 ans d’expérience.
            Implantée à Bouaké, elle dispose de plusieurs bureaux, garantissant une proximité et une réactivité accrue auprès de nos clients.
            Nous intervenons également partout en Côte d'Ivoire, sous réservation avec des délais adaptés.
          </p>

          <p className='fs-5'>
            Nous offrons des solutions de sécurité sur mesure, adaptées aux grandes entreprises, aux PME et aux TPE.
            Malgré nos 50 agents, nous restons une entreprise à taille humaine, mettant en avant la qualité du service et une approche familiale et proche de nos clients.
          </p>

          {/* Section en deux colonnes */}
          <div className="row align-items-center mt-4">
            <div className="col-md-6">
              <h4 className="fw-bold">SPSP-CI SECURITE, un expert de la sécurité à Bouaké</h4>
              <p className='fs-5'>
                Avec plus de 2 ans d’expérience dans la sécurité privée, nous avons acquis une expertise unique en travaillant avec divers secteurs d’activité.
                Nos missions de gardiennage s’étendent des interventions ponctuelles aux contrats à long terme.
              </p>
              <p className='fs-5'>
                Nous proposons une sécurité privée complète : surveillance des biens et des personnes, filtrage, contrôle d’accès, sécurité incendie, palpations, ainsi que des audits et conseils en prévention des risques.
                Chaque collaborateur, qu’il soit sur le terrain ou en interne, a un objectif unique : la qualité du service.
              </p>
            </div>

            <div className="col-md-6">
              <blockquote className="fst-italic p-3 border-start border-white fs-5">
                <strong>SPSP-CI SÉCURITE</strong> : La société de gardiennage qui garantit votre sécurité avec des professionnels hautement qualifiés et des tarifs abordables.
              </blockquote>

              {/* Liste des atouts */}
              <ul className="list-unstyled mt-3 fs-5">
                <li><FaCheckCircle className="me-2" /> Surveillance de qualité</li>
                <li><FaCheckCircle className="me-2" /> Équipements de nouvelle génération</li>
                <li><FaCheckCircle className="me-2" /> Personnel hautement qualifié</li>
              </ul>

              <p className="mt-3 fs-5">
                Quel que soit l’environnement, le secteur d’activité ou le niveau de risque, SPSP-CI SÉCURITÉ propose des services adaptés pour répondre parfaitement aux besoins de ses clients.
              </p>
            </div>
          </div>
        </div>

        {/* Carrousel Section */}
        <section className="container mt-5">
          <Carousel id="carousel" interval={3000}>
            <Carousel.Item>
              <Row>
                <Col md={6}>
                  <h3>SPSP-CI SECURITE de Bouaké</h3>
                  <p className='fs-5'>
                    Nous disposons de services de qualité avec des prix abordables et un personnel compétent.
                  </p>
                </Col>
                <Col md={6}>
                  <div className="block">
                    <div className="block-1">
                      <img
                        src={require('../Assets/img1 (2).jpeg')}
                        alt="SPSP-CI SECURITE Bouaké"
                        className="img-fluid img-thumbnail"
                      />
                    </div>
                    <div className="block-2"></div>
                    <div className="block-3"></div>
                    <div className="block-4"></div>
                    <div className="block-5"></div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            {/* Vous pouvez ajouter d'autres Carousel.Item ici pour d'autres éléments */}
          </Carousel>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default About;
