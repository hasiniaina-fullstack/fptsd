// pages/admin/CreateActualite.jsx

import { useState } from "react"
import api from "../../services/api"
import Sidebar from "../../components/admin/Sidebar"

function CreateActualite() {

  const [titre, setTitre] = useState("")
  const [contenu, setContenu] = useState("")
  const [image, setImage] = useState(null)

  const submit = async (e) => {

    e.preventDefault()

    const formData = new FormData()

    formData.append("titre", titre)
    formData.append("contenu", contenu)
    formData.append("image", image)

    await api.post("/actualites", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    alert("Actualité publiée")
  }

  return (

  <div className="d-flex">

    <Sidebar />

    <div className="container py-4">

      <h2>Nouvelle Actualité</h2>

      <form onSubmit={submit}>

        <input
          className="form-control mb-3"
          placeholder="Titre"
          value={titre}
          onChange={e => setTitre(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          rows="6"
          placeholder="Contenu"
          value={contenu}
          onChange={e => setContenu(e.target.value)}
        />

        <input
          type="file"
          className="form-control mb-3"
          onChange={e => setImage(e.target.files[0])}
        />

        <button
          className="btn btn-success"
        >
          Publier
        </button>

      </form>

    </div>

  </div>

  )
}

export default CreateActualite