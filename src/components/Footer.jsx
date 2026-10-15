import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4">
      <Container>
        <Row className="gy-4">
          {/* Colonne 1 */}
          <Col md={4}>
            <h5>FPTSD</h5>
            <p className="footer-item">
              Formation Professionnelle en Travail Social et Développement
            </p>
          </Col>

          {/* Colonne 2 */}
          <Col md={4}>
            <h5 className="footer-title">Contacts</h5>

            <p className="footer-item">
              <FaEnvelope className="footer-icon" />
              contact@fptsd.mg
            </p>

            <p className="footer-item">
              <FaPhoneAlt className="footer-icon" />
              +261 XX XXX XX
            </p>
          </Col>

          {/* Colonne 3 */}
          <Col md={4}>
            <h5 className="footer-title">Suivez-nous</h5>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <p className="text-center mb-0 pb-3">
          © {new Date().getFullYear()} FPTSD – Tous droits réservés
        </p>
      </Container>
    </footer>

  )
}

export default Footer
