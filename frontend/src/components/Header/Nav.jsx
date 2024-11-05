import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import de Link de react-scroll
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import du Link et des hooks de react-router-dom
import "../../styles/main.scss";
import Contact from "../../pages/Contact/Contact";

function Nav() {
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // État pour la modale
  const navigate = useNavigate();
  const location = useLocation();

  function navOpen() {
    setOpen(!isOpen); // Inverse l'état actuel pour ouvrir/fermer la navigation
  }

  function closeNav() {
    setOpen(false); // Ferme la navigation
  }

  function openModal() {
    setModalOpen(true); // Ouvre la modale
  }

  function closeModal() {
    setModalOpen(false); // Ferme la modale
  }

  function handleHomeClick() {
    if (location.pathname === "/") {
      // Si déjà sur la page d'accueil, faire défiler vers le haut
      window.scrollTo(0, 0);
    } else {
      // Sinon, naviguer vers la page d'accueil
      navigate("/");
    }
    closeNav(); // Ferme la navigation après le clic
  }

  return (
    <>
      <nav className="nav">
        <i className="fa-solid fa-bars" onClick={navOpen}></i> {/* Ajout du gestionnaire de clic */}
        <ul className={`nav__ul ${isOpen ? "nav__ul--open" : ""}`}> {/* Ajout de la classe conditionnelle */}
          <li>
            <Link to="/" onClick={handleHomeClick} >Accueil</Link> {/* Utilisation du bouton pour gérer le clic */}
          </li>
          <li>
            <ScrollLink to="who" smooth={true} duration={500} onClick={closeNav}>
              Qui suis-je
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="works" smooth={true} duration={500} onClick={closeNav}>
              Travaux
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="cv" smooth={true} duration={500} onClick={closeNav}>
              CV
            </ScrollLink>
          </li>
          <li>
            <a href="https://github.com/Skoroll?tab=repositories" target="_blank" rel="noreferrer" onClick={closeNav}>
              Github
            </a>
          </li>
          <li>
            <button onClick={() => { closeNav(); openModal(); }}>Contact</button> {/* Gestion du clic pour ouvrir la modale */}
          </li>
        </ul>
      </nav>

      {/* Modale */}
      {isModalOpen && (
        <div onClick={closeModal} className="modal">
          <div className="modal__content" onClick={(e) => e.stopPropagation()}> {/* Empêche la propagation du clic */}
            <i className="fa-solid fa-x" onClick={closeModal}></i>
            <Contact />
            <button onClick={closeModal}>Fermer</button> {/* Bouton pour fermer la modale */}
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
