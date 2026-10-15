import { Container, Row, Col, Card } from 'react-bootstrap'

function Population() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Population FPTSD</h1>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>Équipe enseignante</Card.Title>
              <Card.Text>
                Des enseignants qualifiés et expérimentés dans le domaine
                du travail social et du développement.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>Équipe administrative</Card.Title>
              <Card.Text>
                Une équipe dédiée à l’accompagnement et à la gestion
                académique des étudiants.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>Étudiants</Card.Title>
              <Card.Text>
                Des étudiants de la L1 au Doctorat engagés dans un parcours
                professionnalisant et humain.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Alumni</Card.Title>
              <Card.Text>
                Les anciens étudiants de la FPTSD témoignent de la qualité
                de la formation et de leur réussite professionnelle.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Population
