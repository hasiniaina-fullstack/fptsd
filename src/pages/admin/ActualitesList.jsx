// pages/admin/ActualitesList.jsx

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import Sidebar from "../../components/admin/Sidebar"

function ActualitesList() {

  const [actualites, setActualites] = useState([])

  const fetchActualites = async () => {

    const res = await api.get("/actualites")

    setActualites(res.data.data)
  }

  useEffect(() => {
    fetchActualites()
  }, [])

  const supprimer = async (id) => {

    if (!window.confirm("Supprimer ?"))
      return

    await api.delete(`/actualites/${id}`)

    fetchActualites()
  }

  return (

  <div className="d-flex">

    <Sidebar />

    <div className="container-fluid p-4">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Gestion des Actualités</h2>

        <Link
          to="/admin/actualites/create"
          className="btn btn-success"
        >
          + Nouvelle Actualité
        </Link>

      </div>

      {actualites.length === 0 ? (

        <div className="alert alert-info">
          Aucune actualité disponible.
        </div>

      ) : (

        <div className="table-responsive">

          <table className="table table-bordered table-hover align-middle">

            <thead className="table-dark">

              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Titre</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {actualites.map((actu) => (

                <tr key={actu.id}>

                  <td>
                    <span className="badge bg-primary">
                      #{actu.id}
                    </span>
                  </td>

                  <td>

                    {actu.image ? (

                      <img
                        src={`https://fptsd.mg/api/public/storage/${actu.image}`}
                        alt={actu.titre}
                        width="80"
                        height="60"
                        style={{
                          objectFit: "cover",
                          borderRadius: "8px"
                        }}
                      />

                    ) : (

                      <span className="text-muted">
                        Aucune image
                      </span>

                    )}

                  </td>

                  <td>
                    {actu.titre}
                  </td>

                  <td>
                    {new Date(
                      actu.created_at
                    ).toLocaleDateString("fr-FR")}
                  </td>

                  <td>

                    <Link
                      to={`/admin/actualites/edit/${actu.id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Modifier
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => supprimer(actu.id)}
                    >
                      Supprimer
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>

  </div>

)
}

export default ActualitesList