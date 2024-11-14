import React, { useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll"; // Import de Link et scroller de react-scroll
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import de Link et des hooks de react-router-dom
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

  function handleNavClick(section) {
    if (location.pathname === "/") {
      // Si déjà sur la page d'accueil, scroll directement
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    } else {
      // Sinon, navigue vers la page d'accueil et attend avant de scroll
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
        });
      }, 100); // délai pour assurer le scroll après le chargement de la page
    }
    closeNav(); // Ferme la navigation après le clic
  }

  return (
    <>
      <nav className="nav">
        <i className="fa-solid fa-bars" onClick={navOpen}></i> {/* Ajout du gestionnaire de clic */}
        <ul className={`nav__ul ${isOpen ? "nav__ul--open" : ""}`}> {/* Ajout de la classe conditionnelle */}
          
          {/* Ramène en haut de la page d'acceuil */}
          <li>
            <Link to="/" onClick={handleHomeClick}>Accueil</Link> 
          </li>
          
          {/* Lien vers "Qui suis-je ?" */}
          <li>
            <ScrollLink to="who" smooth={true} duration={500} onClick={() => handleNavClick("who")}> 
              Qui suis-je
            </ScrollLink>
          </li>

          {/* Lien vers "Travaux" */}
          <li>
            <ScrollLink to="works" smooth={true} duration={500} onClick={() => handleNavClick("works")}>
              Travaux
            </ScrollLink>
          </li>

          {/* Lien vers "CV" */}
          <li>
            <ScrollLink to="cv" smooth={true} duration={500} onClick={() => handleNavClick("cv")}>
              CV
            </ScrollLink>
          </li>

          {/* Lien vers mon GitHub */}
          <li>
            <a href="https://github.com/Skoroll?tab=repositories" target="_blank" rel="noreferrer" onClick={closeNav}>
              Github
            </a>
          </li>

          {/* Ouvre la modale avec le formulaire de contact */}
          <li>
            <button onClick={() => { closeNav(); openModal(); }}>Contact</button> 
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
