// components/admin/Sidebar.jsx

import { NavLink, useNavigate } from "react-router-dom"
import api from "../../services/api"
import {
  FaHome,
  FaNewspaper,
  FaPlusCircle
} from "react-icons/fa"
import './Sidebar.css'

function Sidebar() {

  const navigate = useNavigate()

  const logout = async () => {

    try {

      await api.post("/logout")

    } catch (e) {
      // Si le token est expiré, on poursuit quand même la déconnexion
    }

    localStorage.removeItem("token")
    localStorage.removeItem("user")

    navigate("/login")
  }

  return (

    <div className="sidebar">

      <h4>FPTSD Admin</h4>

      <NavLink to="/admin">
        <FaHome /> Dashboard
      </NavLink>

      <NavLink to="/admin/actualites">
        <FaNewspaper /> Actualités
      </NavLink>

      <NavLink to="/admin/actualites/create">
        <FaPlusCircle /> Ajouter
      </NavLink>

      <button
          onClick={logout}
          className="btn btn-danger w-100 mt-4"
        >
          Déconnexion
      </button>

    </div>

  )
}

export default Sidebar