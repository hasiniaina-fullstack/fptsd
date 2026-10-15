import { Container, Row, Col, Card } from 'react-bootstrap'

function Admission() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Admission</h1>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>Du lycée à l’Université</Card.Title>
              <Card.Text>
                La FPTSD accueille des étudiants issus du lycée jusqu’aux cycles universitaires
                avancés, dans une démarche inclusive et équitable.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>Conditions d’inscription</Card.Title>
              <Card.Text>
                L’admission se fait sur test d’entrée et étude de dossier,
                selon le niveau demandé (Licence, Master ou Doctorat).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>Accueil équitable</Card.Title>
              <Card.Text>
                La FPTSD promeut l’égalité des chances et l’accès équitable à la formation
                pour tous les étudiants.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>Coût de la formation</Card.Title>
              <Card.Text>
                Les coûts varient selon le cycle de formation. Les détails sont communiqués
                lors de la procédure d’admission.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Admission
