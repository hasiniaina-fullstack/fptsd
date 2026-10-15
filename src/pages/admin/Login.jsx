import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import './Login.css'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const submit = async (e) => {

    e.preventDefault()

    setLoading(true)
    setError("")

    try {

      const res = await api.post("/login", {
        email,
        password
      })

      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.user))

      navigate("/admin")

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Email ou mot de passe incorrect."
      )

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="container">

      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >

        <div className="col-md-5">

          <div className="card shadow-lg border-0 rounded-4">

            <div className="card-body p-5">

              <h2 className="text-center mb-4">
                Administration FPTSD
              </h2>

              {error && (

                <div className="alert alert-danger">

                  {error}

                </div>

              )}

              <form onSubmit={submit}>

                <div className="mb-3">

                  <label>Email</label>

                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />

                </div>

                <div className="mb-4">

                  <label>Mot de passe</label>

                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                  />

                </div>

                <button
                  className="btn btn-success w-100"
                  disabled={loading}
                >

                  {loading
                    ? "Connexion..."
                    : "Se connecter"}

                </button>
                      <br />
                      <br />
                      <center>
                      <a href="https://fptsd.mg/">Aller vers le site FPTSD</a>
                      </center>
                      
              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Login