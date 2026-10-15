import { useEffect, useState } from "react"
import api from "../../services/api"
import Sidebar from "../../components/admin/Sidebar"

function Dashboard() {

  const [stats, setStats] = useState({
    actualites: 0
  })

  useEffect(() => {

    api.get("/stats")
      .then(res => {
        setStats(res.data)
      })
      .catch(err => console.error(err))

  }, [])

  return (

    <div className="d-flex">

      <Sidebar />

      <div className="container-fluid p-4">

        <h2>Tableau de bord</h2>

        <div className="row">

          <div className="col-md-4">

            <div className="card shadow border-0">

              <div className="card-body text-center">

                <h1 className="display-4 text-primary">
                  {stats.actualites}
                </h1>

                <h5>Actualités publiées</h5>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Dashboard