// pages/Article.jsx

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../services/api"
import { FaCalendarAlt, FaUser, FaClock } from "react-icons/fa"

function Article() {

    const { id } = useParams()

    const [article, setArticle] = useState(null)

    useEffect(() => {

        api.get(`/actualites/${id}`)

        .then(res => {

            setArticle(res.data)

        })

    }, [id])

    if (!article)

        return <h3>Chargement...</h3>

    return (

        <div className="container py-5">

            <h1 className="mb-4">

                {article.titre}

            </h1>

                            <span>
                            <FaCalendarAlt className="me-1 text-success" />
            
                            {new Date(article.created_at).toLocaleDateString("fr-FR", {
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
                            {Math.max(1, Math.ceil(article.contenu.split(" ").length / 200))} min de lecture
                          </span>
                          <br />
                          <br />

            {

                article.image &&

                <img

                    src={`https://fptsd.mg/api/public/storage/${article.image}`}

                    className="img-fluid rounded mb-4"

                    alt=""

                />

            }

            <p style={{textAlign:"justify"}}>

                {article.contenu}

            </p>

        </div>

    )

}

export default Article