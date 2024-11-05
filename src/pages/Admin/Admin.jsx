import React, { useState } from "react";
import "../../styles/main.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Admin() {
  // États pour gérer les valeurs des champs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Fonction pour gérer la soumission du formulaire
  function handleSubmit(event) {
    event.preventDefault();
    // Actions pour traiter les données du formulaire
    console.log("Email:", email);
    console.log("Password:", password);

    navigate('/')
  }

  return (
    <div className="admin">
                <Link to="/">Retour au site</Link>
      <form className="admin__form" onSubmit={handleSubmit}>
        <h2>Connexion Administrateur</h2>
        <div className="form-group">
  <label htmlFor="email">Email :</label>
  <input
    type="email"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Entrez votre e-mail"
    required
    autoComplete="email"
  />
</div>

<div className="form-group">
  <label htmlFor="password">Mot de passe :</label>
  <input
    type="password"
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Entrez votre mot de passe"
    required
    autoComplete="current-password"
  />
</div>

        <button type="submit" className="btn-submit">Connexion</button>
      </form>
    </div>
  );
}

export default Admin;
