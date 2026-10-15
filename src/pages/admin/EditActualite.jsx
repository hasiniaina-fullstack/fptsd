// pages/admin/EditActualite.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import Sidebar from "../../components/admin/Sidebar";

function EditActualite() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [titre, setTitre] = useState("");
  const [contenu, setContenu] = useState("");
  const [image, setImage] = useState(null);
  const [imageActuelle, setImageActuelle] = useState("");

  useEffect(() => {
    chargerActualite();
  }, []);

  const chargerActualite = async () => {
    try {
      const res = await api.get(`/actualites/${id}`);

      setTitre(res.data.titre);
      setContenu(res.data.contenu);
      setImageActuelle(res.data.image);
    } catch (error) {
      console.error(error);
      alert("Erreur lors du chargement");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("titre", titre);
    formData.append("contenu", contenu);

    if (image) {
      formData.append("image", image);
    }

    try {
      await api.post(
        `/actualites/${id}?_method=PUT`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Actualité modifiée avec succès");
      navigate("/admin/actualites");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la modification");
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container py-4">
        <h2>Modifier une actualité</h2>

        <form onSubmit={submit}>
          <input
            className="form-control mb-3"
            placeholder="Titre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
          />

          <textarea
            className="form-control mb-3"
            rows="6"
            placeholder="Contenu"
            value={contenu}
            onChange={(e) => setContenu(e.target.value)}
          />

          {imageActuelle && (
            <div className="mb-3">
              <p>Image actuelle :</p>

              <img
                src={`https://fptsd.mg/storage/${imageActuelle}`}
                alt={titre}
                className="img-fluid rounded"
                style={{ maxWidth: "300px" }}
              />
            </div>
          )}

          <input
            type="file"
            className="form-control mb-3"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button className="btn btn-primary">
            Enregistrer les modifications
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditActualite;