import { useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaUser, FaClock } from "react-icons/fa"
import api from "../services/api"

import { Link } from "react-router-dom"

function Actualites() {

  const [actualites, setActualites] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {

  if (actualites.length === 0) return

  const interval = setInterval(() => {
    nextSlide()
  }, 5000) // 5 secondes

  return () => clearInterval(interval)

}, [actualites, index])

  useEffect(() => {
    api.get("/actualites")
      .then(res => {
        setActualites(res.data.data)
      })
      .catch(err => console.error(err))
  }, [])

  const nextSlide = () => {
    setIndex((prev) =>
      prev === actualites.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? actualites.length - 1 : prev - 1
    )
  }

  if (actualites.length === 0) {
    return <div className="container py-5">Chargement...</div>
  }

  const current = actualites[index]

  return (
    <div className="container py-5">

      <h2 className="text-center catalogue-title mb-5">
            ACTUALITES
            <span></span>
          </h2>

      <div className="news-slider">

        <button
          className="slider-btn prev"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        



        <div className="card h-100 shadow">

          {current.image && (

              <img
                  src={`https://fptsd.mg/api/public/storage/${current.image}`}
                  className="card-img-top"
                  alt={current.titre}
              />

          )}

          <div className="card-body">

              <h5>{current.titre}</h5>

              <span>
                <FaCalendarAlt className="me-1 text-success" />

                {new Date(current.created_at).toLocaleDateString("fr-FR", {
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
                {Math.max(1, Math.ceil(current.contenu.split(" ").length / 200))} min de lecture
              </span>

              <p>

                  {current.contenu.substring(0,150)}...

              </p>

              <Link
                  to={`/actualites/${current.id}`}
                  className="btn btn-success"
              >
                  Lire la suite
              </Link>

          </div>

        </div>









        <button
          className="slider-btn next"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>

      </div>

    </div>
  )
}

export default Actualites