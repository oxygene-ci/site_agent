import React from 'react'
import Navbars from './Navbars'
import Footer from './Footer'
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div>
      <Navbars />
      <div className="contact-us">
        <Container className='fs-5'>
          <div>
            <h3 className='fw-bold'>Contactez-nous</h3>
            <p>
              Pour plus d'informations, un devis gratuit, une question sur nos compétences ou sur nos traitements de désinsectisation, dératisation,
              désinfection, déreptilisation et à Bouaké et partout en Côte d'Ivoire, n'hésitez pas à nous contacter, notre équipe est à votre disposition.
              Nous prendrons contact avec vous dès réception de votre message
            </p>
            <p>
              N'hésitez pas à nous contacter pour un devis personnalisé gratuit.
            </p>
          </div>
          <Row>
            <Col sm={7}>
              <div className="contact-form">
                <Form id="ajax-contact" method="post" action="contact-form-mail.php">
                  <div className="messages" id="form-messages"></div>
                  <Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Label>Nom *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Veuillez saisir votre nom *"
                          required
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Label>Prenom *</Form.Label>
                        <Form.Control
                          type="text"
                          name="surname"
                          placeholder="Veuillez saisir votre prenom *"
                          required
                        />
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group>
                    <Row>
                      <Col md={6}>
                        <br />
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Veuillez saisir votre email *"
                          required
                        />
                      </Col>
                      <Col md={6}>
                        <br />
                        <Form.Label>Teléphone *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Veuillez saisir votre numéro *"
                          required
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <br />
                  <Form.Group>
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      placeholder="Veuillez saisir votre message *"
                      rows={4}
                      required
                    />
                  </Form.Group>
                  <br />
                  <Button variant="dark" type="submit" className="btn-submit">
                    Envoyer
                  </Button>

                  <small className="text-muted d-block mt-3">
                    <strong>*</strong> Ces champs sont obligatoires.
                  </small>
                </Form>
              </div>
            </Col>

            <Col sm={5}>
              <div className="contact-info">
                <div className="info-item">
                  <FaMapMarkerAlt className="icon" />
                  <div>
                    <strong>Adresse</strong><br />
                    Siège social : Bouaké (gnamien akakro)<br />
                    sur la voie de l'aéroport
                  </div>
                </div>

                <div className="info-item">
                  <FaPhoneAlt className="icon" />
                  <div>+(225) 0707446125 / 0142829872 / 0172344399 / 0757486624</div>
                </div>

                {/* <div className="info-item">
                  <FaFax className="icon" />
                  <div>123 123 4567</div>
                </div> */}

                <div className="info-item">
                  <FaEnvelope className="icon" />
                  <div>
                    <a href="mailto:yenakpekone72@gmail.com">yenakpekone72@gmail.com</a><br />
                  </div>
                </div>

                <div className="map-container">
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.7221160157799!2d-5.066491076027347!3d7.7426143268752305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb8000e5120f4e7%3A0x67f0734a28fbdd2e!2sBouak%C3%A9%20Airport!5e0!3m2!1sen!2sci!4v1741888233587!5m2!1sen!2sci"
                    width="100%"
                    height="300"
                    style={{ borderRadius: '20px' }}
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    frameBorder="0">
                  </iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
