import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink
import "../../styles/main.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__div footer__contact">
        <h3>Pour me contacter :</h3>
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i> | yg.gicquel@gmail.com
          </li>
          <li>
            <i className="fa-solid fa-phone"></i> | 06 45 77 15 83
          </li>
          <li>
            <Link to="/contact">
              <i className="fa-solid fa-message"></i> | Formulaire de contact
            </Link>
          </li>
        </ul>
      </div>

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
      <div className="footer__div">
        <h3>Naviguer</h3>
        <ul>
          <li>
            <ScrollLink to="home" smooth={true} duration={500} className="footer-link">
              Retour en haut
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="who" smooth={true} duration={500} className="footer-link">
              Qui suis-je
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="cv" smooth={true} duration={500} className="footer-link">
              CV
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="works" smooth={true} duration={500} className="footer-link">
              Travaux
            </ScrollLink>
          </li>
        </ul>
      </div>
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
