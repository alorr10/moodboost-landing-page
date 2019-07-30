import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap"
import iphone from "../images/iphone.png"
import { AppStoreImage, PlayStoreImage } from "../components/AppStoreImages"
import "../components/layout.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Row>
      <Col xs={{ span: 6, offset: 3 }} align="center" className="mb-3">
        <h1
          style={{ fontFamily: "Mermaid-bold", marginBottom: 20 }}
          className="text-center"
        >
          Moodboost
        </h1>
      </Col>
    </Row>
    <Row>
      <Col xs={{ span: 6, offset: 3 }} align="center" className="mb-3">
        <AppStoreImage />
      </Col>
      <Col xs={{ span: 6, offset: 3 }} align="center" className="mb-3">
        <PlayStoreImage />
      </Col>
      <Col
        xs={{ span: 6, offset: 3 }}
        sm={{ span: 4, offset: 1 }}
        align="center"
      >
        <Image src={iphone} fluid style={{ width: 300 }} />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage

/*

  <Container style={{ backgroundColor: "rgb(255,184,186)" }}>
    <SEO title="Home" />
    <Jumbotron
      className="p-0 pt-5"
      style={{ backgroundColor: "rgb(255,184,186)" }}
    >
      <h1
        style={{ fontFamily: "Mermaid-bold", marginBottom: 20 }}
        className="text-center"
      >
        Moodboost
      </h1>
      <Row>
        <Col
          xs={{ span: 6, offset: 3 }}
          sm={{ span: 4, offset: 1 }}
          align="center"
          className="mb-3"
        >
          <AppStoreImage />
          <PlayStoreImage />
        </Col>
        <Col xs={{ span: 6, offset: 3 }} sm={{ span: 4, offset: 1 }}>
          <Image src={iphone} rounded fluid />
        </Col>
      </Row>
    </Jumbotron>
  </Container>*/
