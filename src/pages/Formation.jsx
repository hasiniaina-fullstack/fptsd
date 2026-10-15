import { Container, Row, Col, Card } from 'react-bootstrap'
import { formations } from '../data/formations'

function Formation() {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Nos formations</h1>

      {/* LICENCE */}
      <h2 className="mt-5">Parcours Licence</h2>
      <Row>
        {formations.licence.map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>{item.niveau}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.titre}
                </Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* MASTERS */}
      <h2 className="mt-5">Parcours Masters</h2>
      <Row>
        {formations.masters.map((item, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>{item.niveau}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.titre}
                </Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* DOCTORAT */}
      <h2 className="mt-5">Parcours Doctorat</h2>
      <Row>
        {formations.doctorat.map((item, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>{item.niveau}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.titre}
                </Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Formation
