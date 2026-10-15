import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import Counter from "../components/Counter";
import egsLogo from "../assets/egs.png";
import sociologieLogo from "../assets/sociologie.png";
import uaLogo from "../assets/ua.png";
import { faqData } from "../data/faqData";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { newsData } from "../data/newsData";
import Actualites from "../pages/Actualites"
import { Link } from "react-router-dom"


const mainCardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

//const MotionCard = motion(Card);

const MotionCard = motion.create(Card)

const partners = [
  { id: 1, img: egsLogo, name: "EGS" },
  { id: 2, img: sociologieLogo, name: "SOCIOLOGIE" },
  { id: 3, img: uaLogo, name: "UA" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // délai entre chaque item
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};



function Home() {
  const [activeIndex, setActiveIndex] = useState(null); // ✅ BON ENDROIT

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex(([prev]) => [
      (prev + newDirection + newsData.length) % newsData.length,
      newDirection,
    ]);
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  const current = newsData[index];

  return (
    <>
      {/* HERO SECTION */}

        <section className="hero-section text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Container>
              <h1 className="display-5 fw-bold hero-title text-gradient-fptsd">
                F P T S D<br/>
                Formation Professionnelle en Travail Social et Développement
              </h1>
              <p className="lead mt-3">
                Riche de ses <strong className="highlight">21 ans</strong> d’expérience dans l’enseignement du travail social, la FPTSD ambitionne aujourd’hui à <strong className="highlight">digitaliser son enseignement</strong> afin de répondre favorablement aux demandes grandissantes et de s’adapter au contexte du numérique.
              </p>
              <div className="mt-4">
                <Button
                  as={Link}
                  to="/actualites"
                  variant="light"
                  className="gradient-button"
                >
                  Voir toutes les actualités
                </Button>
              </div>
            </Container>
          </motion.div>
        </section>


      {/* CATALOGUE DE FORMATION */}

      <motion.section
          className="bg-light py-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
      >
          <Container>

            {/* Titre principal */}
            <h2 className="text-center catalogue-title mb-5">
              CATALOGUE DE FORMATION
              <span></span>
            </h2>

            {/* Carte principale LICENCE */}

            <MotionCard
              className="catalogue-wrapper shadow-lg border-0"
              variants={mainCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
            <Card className="catalogue-wrapper shadow-lg border-0">
              <Card.Body className="p-5">
                <h3 className="text-center catalogue-subtitle mb-5">
                  PARCOURS LICENCE
                  <span></span>
                </h3>

                <Row className="g-4">
                  {/* L1 */}
                  <Col md={4}>
                    <motion.div whileHover={{ y: -8 }}>
                      <Card className="h-100 border-animated catalogue-item">
                        <Card.Body>
                          <span className="level">L1</span>
                          <Card.Title>
                            <br/>
                            À la découverte du métier
                          </Card.Title>
                          <Card.Text>
                            Découvrez les fondamentaux et explorez les différentes
                            facettes de votre futur métier.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>

                  {/* L2 */}
                  <Col md={4}>
                    <motion.div whileHover={{ y: -8 }}>
                      <Card className="h-100 border-animated catalogue-item">
                        <Card.Body>
                          <span className="level">L2</span>
                          <Card.Title>
                            <br/>
                            Accroissement des compétences et mise en pratique
                          </Card.Title>
                          <Card.Text>
                            Développez vos compétences techniques et appliquez-les
                            sur des projets concrets.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>

                  {/* L3 */}
                  <Col md={4}>
                    <motion.div whileHover={{ y: -8 }}>
                      <Card className="h-100 border-animated catalogue-item">
                        <Card.Body>
                          <span className="level">L3</span>
                          <Card.Title>
                            <br/>
                            Connaissances opérationnelles
                          </Card.Title>
                          <Card.Text>
                            Maîtrisez les connaissances essentielles pour une
                            insertion professionnelle réussie.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                </Row>

                {/* Bouton */}
                <div className="text-center mt-5">
                  <button className="catalogue-btn">
                    CONTACTEZ-NOUS →
                  </button>
                </div>
              </Card.Body>
            </Card>
          </MotionCard>

          <br/>
          <br/>
          <br/>

            {/* Carte principale MASTER */}

            <MotionCard
              className="catalogue-wrapper shadow-lg border-0"
              variants={mainCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
            <Card className="catalogue-wrapper shadow-lg border-0">
              <Card.Body className="p-5">
                <h3 className="text-center catalogue-subtitle mb-5">
                  PARCOURS MASTERS
                  <span></span>
                </h3>

                <Row className="g-4 justify-content-center">
                  {/* L1 */}
                  <Col md={4}>
                    <motion.div whileHover={{ y: -8 }}>
                      <Card className="h-100 border-animated catalogue-item">
                        <Card.Body>
                          <span className="level">MASTER 1</span>
                          <Card.Title>
                            <br/>
                            Objectifs à préciser
                          </Card.Title>
                          <Card.Text>
                            Spécialisation avancée avec une approche recherche et innovation.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>

                  {/* L2 */}
                  <Col md={4}>
                    <motion.div whileHover={{ y: -8 }}>
                      <Card className="h-100 border-animated catalogue-item">
                        <Card.Body>
                          <span className="level">MASTER 2</span>
                          <Card.Title>
                            Objectifs à préciser
                          </Card.Title>
                          <Card.Text>
                            Expertise pointue et préparation à la recherche ou au monde professionnel.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>

                </Row>

                {/* Bouton */}
                <div className="text-center mt-5">
                  <button className="catalogue-btn">
                    CONTACTEZ-NOUS →
                  </button>
                </div>
              </Card.Body>
            </Card>
          </MotionCard>

          <br/>
          <br/>
          <br/>

            {/* Carte principale DOCTORAT */}

            <MotionCard
              className="catalogue-wrapper shadow-lg border-0"
              variants={mainCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
            <Card className="catalogue-wrapper shadow-lg border-0">
              <Card.Body className="p-5">
                <h3 className="text-center catalogue-subtitle mb-5">
                  PARCOURS DOCTORAT
                  <span></span>
                </h3>

                <Row className="g-4 justify-content-center">
                  {/* L1 */}
                  <Col md={4}>
                    <motion.div whileHover={{ y: -8 }}>
                      <Card className="h-100 border-animated catalogue-item">
                        <Card.Body>
                          <span className="level">DOCTORAT</span>
                          <Card.Title>
                            <br/>
                            (il me faut un contenu ici aussi)
                          </Card.Title>
                          <Card.Text>
                            Programme doctoral de haut niveau pour former les chercheurs et leaders scientifiques de demain. Recherche approfondie avec encadrement personnalisé.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>

                </Row>

                {/* Bouton */}
                <div className="text-center mt-5">
                  <button className="catalogue-btn">
                    CONTACTEZ-NOUS →
                  </button>
                </div>
              </Card.Body>
            </Card>
          </MotionCard>



        </Container>
      </motion.section>




      {/* CHIFFRES CLÉS */}
      <section className="py-5 text-center">
        <motion.section
          className="py-5 bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            <h2 className="text-center catalogue-title mb-5">
              CHIFFRES CLÉS
              <span></span>
            </h2>
          <Container>
            <Row className="text-center justify-content-center g-4">
              <Col xs={12} sm={6} md={3}>
                <Button variant="light" className="gradient-button w-100 stats-card">
                  <h2 className="fw-bold">
                    <Counter end={21} />+
                  </h2>
                  <p>Années d’expérience</p>
                </Button>
              </Col>

              <Col xs={12} sm={6} md={3}>
                <Button variant="light" className="gradient-button w-100 stats-card">
                  <h2 className="fw-bold">
                    <Counter end={1000} />+
                  </h2>
                  <p>Étudiants formés</p>
                </Button>
              </Col>

              <Col xs={12} sm={6} md={3}>
                <Button variant="light" className="gradient-button w-100 stats-card">
                  <h2 className="fw-bold">
                    <Counter end={50} />+
                  </h2>
                  <p>Enseignants</p>
                </Button>
              </Col>

              <Col xs={12} sm={6} md={3}>
                <Button variant="light" className="gradient-button w-100 stats-card">
                  <h2 className="fw-bold">
                    <Counter end={20} />+
                  </h2>
                  <p>Partenaires</p>
                </Button>
              </Col>
            </Row>
          </Container>
        </motion.section>
      </section>

      {/* ACTUALITÉS */}
      <section className="bg-light py-5">

        <motion.section
          className="py-5 bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Actualites />
        </motion.section>

      </section>

      {/* PARTENAIRES */}
      
      <section className="partners-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="text-center catalogue-title mb-5">
            PARTENAIRES
            <span></span>
          </h2>
          <p className="text-muted fw-bold">
            Ensemble pour l'excellence et l'innovation
          </p>
        </motion.div>

        <Row className="justify-content-center g-5">
          {partners.map((partner, index) => (
            <Col md={2} sm={6} xs={10} key={partner.id}>
              <motion.div
                className="partner-card"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                }}
              >
                <img src={partner.img} alt={partner.name} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      </section>

      {/* FAQ */}
      
      <section className="faq-section py-5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <Container>
        <h2 className="text-center catalogue-title mb-5">
            QUESTIONS FRÉQUENTES
            <span></span>
          </h2>

        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="faq-item mb-3"
            variants={itemVariants}
          >
            <motion.div
              className="faq-question"
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
              >
                <FaChevronDown />
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

      </Container>
    </motion.div>
    </section>


    </>
  )
}

export default Home
