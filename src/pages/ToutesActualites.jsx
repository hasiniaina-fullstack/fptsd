import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, Button, Spinner, Pagination } from "react-bootstrap"
import api from "../services/api"
import { FaCalendarAlt, FaUser, FaClock } from "react-icons/fa"

function ToutesActualites() {

    const [actualites, setActualites] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const fetchActualites = async (page = 1) => {

    setLoading(true)

    try {

        const res = await api.get(`/actualites?page=${page}`)

        setActualites(res.data.data)
        setCurrentPage(res.data.current_page)
        setLastPage(res.data.last_page)

    } catch (error) {

        console.log(error)

    } finally {

        setLoading(false)

    }

}

  useEffect(() => {

    fetchActualites()

}, [])


  if (loading) {

    return (
      <Container className="text-center py-5">
        <Spinner animation="border" />
      </Container>
    )

  }

  return (

    <Container className="py-5">

      <h2 className="text-center mb-5">
        Toutes les actualités
      </h2>

      <Row>

        {actualites.map(actu => (

          <Col
            lg={4}
            md={6}
            className="mb-4"
            key={actu.id}
          >

            <Card className="shadow h-100 border-0">

              {actu.image && (

                <Card.Img
                  variant="top"
                  src={`https://fptsd.mg/api/public/storage/${actu.image}`}
                  style={{
                    height: "220px",
                    objectFit: "cover"
                  }}
                />

              )}

              <Card.Body className="d-flex flex-column">

                <Card.Title>

                  {actu.titre}

                </Card.Title>

                                <span>
                                <FaCalendarAlt className="me-1 text-success" />
                
                                {new Date(actu.created_at).toLocaleDateString("fr-FR", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric"
                                })}
                              </span>
                
                              <span className="mx-3">
                                <FaUser className="me-1 text-primary" />
                                Administration FPTSD
                              </span>
                
                              <span>
                                <FaClock className="me-1 text-warning" />
                                {Math.max(1, Math.ceil(actu.contenu.split(" ").length / 200))} min de lecture
                              </span>

                <Card.Text>

                  {actu.contenu.substring(0,120)}...

                </Card.Text>

                <Button
                  as={Link}
                  to={`/actualites/${actu.id}`}
                  variant="success"
                  className="mt-auto"
                >

                  Lire la suite

                </Button>

              </Card.Body>

            </Card>

          </Col>

        ))}

      </Row>

 
        <div className="d-flex justify-content-center mt-5">

  <Pagination>

    <Pagination.First
      disabled={currentPage === 1}
      onClick={() => {
        fetchActualites(1)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
    />

    <Pagination.Prev
      disabled={currentPage === 1}
      onClick={() => {
        fetchActualites(currentPage - 1)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
    />

    {[...Array(lastPage)].map((_, index) => (

      <Pagination.Item
        key={index + 1}
        active={currentPage === index + 1}
        onClick={() => {
          fetchActualites(index + 1)
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
      >
        {index + 1}
      </Pagination.Item>

    ))}

    <Pagination.Next
      disabled={currentPage === lastPage}
      onClick={() => {
        fetchActualites(currentPage + 1)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
    />

    <Pagination.Last
      disabled={currentPage === lastPage}
      onClick={() => {
        fetchActualites(lastPage)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
    />

  </Pagination>

</div>


    </Container>

  )

}

export default ToutesActualites