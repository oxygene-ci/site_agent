import React from 'react'
import { Carousel, Row, Col, Container } from 'react-bootstrap'
import Slider from "react-slick";

function Main() {

  const settings = {
    dots: false,                  // Pas de points d'indicateur
    infinite: true,               // Boucle infinie
    speed: 1500,                  // Vitesse du défilement
    slidesToShow: 5,              // Nombre de logos visibles à la fois
    slidesToScroll: 1,            // Nombre de logos à faire défiler à chaque fois
    autoplay: true,               // Activation du défilement automatique
    autoplaySpeed: 2000,          // Vitesse du défilement automatique
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } }, // 4 logos sur les écrans plus petits
      { breakpoint: 768, settings: { slidesToShow: 3 } },  // 3 logos sur tablettes
      { breakpoint: 576, settings: { slidesToShow: 2 } }   // 2 logos sur petits écrans
    ]
  };

  return (
    <div>
      {/* Carousel Section */}
      <section>
        <Carousel fade>
          <Carousel.Item>
            <img
              src={require('../Assets/img1 (2).jpeg')}
              className="d-block w-100"
              width="100" height="1000"
              alt="picture1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require('../Assets/img2 (2).jpeg')}
              className="d-block w-100"
              width="100" height="1000"
              alt="picture2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require('../Assets/img3.jpeg')}
              className="d-block w-100"
              width="100" height="1000"
              alt="picture3"
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col md={4} className="mb-4">
            <div className="service-card">
              <h3>Conseil en sécurité</h3>
              <span>
                Être un partenaire stratégique pour nos clients c'est aussi les guider dans l'appréhension globale de leurs problématiques en sécurité / sûreté, penser avec eux l'amont et l'aval afin d'optimiser la mise en œuvre pour une sécurité optimale et des audits et des conseils en sécurité.
              </span>
              <i className="fa fa-search fa-3x"></i>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-card">
              <h3>Société de sécurité : nos services</h3>
              <span>
                Nous vous proposons des solutions adaptées et cohérentes. Pour cela, nos agents sont sélectionnés, formés et reflètent l'image de HVNET par leur professionnalisme en disposant notamment d'outils de travail performants.
              </span>
              <i className="fa fa-search fa-3x"></i>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-card">
              <h3>Société de sécurité : nos expertises</h3>
              <span>
                Notre solide expérience dans le domaine de la sécurité et du gardiennage, ainsi que la formation de notre personnel et notre expertise pour la sécurité seront pour vous des éléments de confiance indiscutables.
              </span>
              <i className="fa fa-search fa-3x"></i>
            </div>
          </Col>
        </Row>
      </Container>
      <section className="business-logo">
        <Container className="mt-4">
          <Slider {...settings}>
            <div className="b-logo">
              <img src="https://img.freepik.com/free-vector/letter-s-logo-negative-space-style-corporate-business-emblem-logotype_126523-2780.jpg?w=360&t=st=1671774874~exp=1671775474~hmac=e94409a1a83800e361c1f91ba030a8b4ea32a26e09c27d15c5413f5b4d4fe99a" alt="Logo 1" />
            </div>
            <div className="b-logo">
              <img src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?w=360&t=st=1671774847~exp=1671775447~hmac=455b5937eca7393674d27ace834a5e8e7a6464a821852d2fa28fca117f556c45" alt="Logo 2" />
            </div>
            <div className="b-logo">
              <img src="https://img.freepik.com/free-vector/logo-with-three-flower-petals_1017-4311.jpg?w=360&t=st=1671774993~exp=1671775593~hmac=acf41e64371bfd307db502c5a9250d94d18cedcac78a7f1dcb49226b2641f21d" alt="Logo 3" />
            </div>
            <div className="b-logo">
              <img src="https://img.freepik.com/free-vector/purple-abstract-geometrical-logo-3d_1043-55.jpg?w=360&t=st=1671775015~exp=1671775615~hmac=62728b03865d6d4d085718e3fc77b230edf252b17ca9a455c62660599c8c9ddc" alt="Logo 4" />
            </div>
            <div className="b-logo">
              <img src="https://img.freepik.com/free-vector/logo-template-background_1390-55.jpg?w=360&t=st=1671775042~exp=1671775642~hmac=a9cb74b818ef522d4463326baddb554ae62c7e21d7bf8f5faab642c6ae19b57f" alt="Logo 5" />
            </div>
            <div className="b-logo">
              <img src="https://img.freepik.com/free-vector/logo-with-curly-arrow_1043-146.jpg?w=360&t=st=1671775076~exp=1671775676~hmac=4fbff9695993b13b1e968df5049d2b4bf10027cb9c0d9966a6751b5f6ff64098" alt="Logo 6" />
            </div>
          </Slider>
        </Container>
      </section>
      <section className="py-5">
        <div className="container">
          <h3 className="font-weight-light text-center fw-bold fs-3">Société de Gardiennage de Bouaké</h3>
          <p className='fs-5'>
            <i>SPSP-CI Sécurité</i> est une société spécialisée dans les services de gardiennage assurant la surveillance de lieux et la protection de personnes.
            Nous offrons notamment les services de patrouille et d'inspection.
          </p>
          <p className='fs-5'>
            En effet, depuis près de 2 ans, notre <b>société de gardiennage de Bouaké SPSP-CI SECURITE</b> assiste et conseille les organisateurs d'événements dans la sécurisation de leurs opérations à Bouaké.
            Rigueur, réactivité, sécurité sur mesure et qualité d'accueil sont ainsi au cœur de notre société de gardiennage.
            Depuis 2023, nos équipes mettent ces qualités au service de nouveaux clients.
            Nos professionnels accrédités par le Bureau de la sécurité privée (BSP) opèrent dans les secteurs commerciaux, industriels, gouvernementaux et privés.
            Ils sont présents lors de conflits de travail, de travaux majeurs, d'événements spéciaux ou lors de tout autre événement nécessitant divers besoins en gardiennage.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Main
