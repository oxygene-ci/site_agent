import React from 'react'
import Navbars from './Navbars'
import Footer from './Footer'
import { Container, Row, Col, Card } from "react-bootstrap";

function Blog() {

  const blogPosts = [
    {
      id: 1,
      title: "MISSION AGENT SECURITE",
      excerpt:
        "Les missions d'un agent de sécurité privée Indépendamment de son lieu d'affectation ou de sa mission ponctuelle, l'agent a pour obligation de garantir la sécurité des biens et des personnes dans le cadre de sa fonction.",
    },
    {
      id: 2,
      title: "POURQUOI FAIRE APPEL À UNE BOÎTE DE GARDIENNAGE ?",
      excerpt:
        "Une boîte de gardiennage est une société qui connaît parfaitement le domaine et assure efficacement la sécurité de personnes et de lieux.",
    },
    {
      id: 3,
      title: "MAÎTRE CHIEN OU VIGILE, LEQUEL PRIVILÉGIER ?",
      excerpt:
        "Un maître-chien, ou agent cynophile (car accompagné d'un chien) est une des meilleures solutions pour se protéger de tout acte malveillant.",
    },
  ];


  return (
    <div>
      <Navbars />
      <div style={{paddingTop: '120px'}}>
        <Container className="py-5 fs-5">
          <Row className="g-4"> {/* Ajout d'un gap entre les cartes */}
            {blogPosts.map((post) => (
              <Col md={4} sm={6} xs={12} key={post.id}>
                <Card className="blog-card shadow-sm">
                  <div className="blog-image-container">
                    <Card.Img variant="top" src={require('../Assets/agent_securite.jpeg')} alt="Blog Image" className="blog-image" />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <a href={post.link} className="blog-title">{post.title}</a>
                    </Card.Title>
                    <br/>
                    <Card.Text>{post.excerpt}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
