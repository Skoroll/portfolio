import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll"; // Import ScrollLink et scroller
import "../../styles/main.scss";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleFooterNavClick(section) {
    if (location.pathname === "/") {
      // Si déjà sur la page d'accueil, défiler directement vers la section
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    } else {
      // Sinon, naviguer vers la page d'accueil, puis défiler
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
        });
      }, 100); // Délai pour permettre le chargement de la page
    }
  }

  return (
    <footer className="footer">
      {/* Colonne contact */}
      <div className="footer__div footer__contact">
        <h3>Pour me contacter :</h3>
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i> | <a href="mailto:yg.gicquel@gmail.com">yg.gicquel@gmail.com</a>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i> | <a href="tel:0645771583">06 45 77 15 83</a>
          </li>
          <li>
            <Link to="/contact">
              <i className="fa-solid fa-message"></i> | Formulaire de contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Colonne liens version desktop */}
      <div className="footer__div footer__links">
        <h3>Les liens :</h3>
        <ul className="footer__links--link">
          <li>
            <a href="https://github.com/Skoroll" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i> | Mon GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yann-gicquel-6b2009323/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i> | Mon Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/skoroll_/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i> | Mon Instagram
            </a>
          </li>
        </ul>

        {/* Colonne liens version mobile */}
        <ul className="footer__links--mobile">
          <li>
            <a href="https://github.com/Skoroll" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yann-gicquel-6b2009323/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/skoroll_/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Colonne nav */}
      <div className="footer__div">
        <h3>Naviguer</h3>
        <ul>
          <li>
            <ScrollLink to="home" smooth={true} duration={500} onClick={() => handleFooterNavClick("home")}>
              Retour en haut
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="who" smooth={true} duration={500} onClick={() => handleFooterNavClick("who")}>
              Qui suis-je
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="cv" smooth={true} duration={500} onClick={() => handleFooterNavClick("cv")}>
              CV
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="works" smooth={true} duration={500} onClick={() => handleFooterNavClick("works")}>
              Travaux
            </ScrollLink>
          </li>
        </ul>
      </div>


      {/* Colonne divers */}
      <div className="footer__div">
        <h3>Divers :</h3>
        <ul>
          <li>©2024 GICQUEL Yann</li>
          <li><Link to="/legal">Mentions légales</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
