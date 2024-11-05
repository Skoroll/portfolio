import React, { useEffect } from "react";
import "../../styles/main.scss";


function Legal() {
  useEffect(() => {
    window.scrollTo(0, 0); // Fait défiler la page vers le haut lors du chargement du composant
  }, []);

  return (
    <div className="legal">
      <h2>Mentions légales</h2>
      <div className="legal--wrapper">
        <div className="legal__owner">
          <h3>Editeur du site :</h3>
          <p className="legal--text legal--title">Nom et prénom : </p>
          <p className="legal--answer">GICQUEL Yann</p>

          <p className="legal--text legal--title">Adresse : </p>
          <p className="legal--answer">40 rue De Gaulle, 68560 Hirsingue</p>

          <p className="legal--text legal--title">Adresse e-mail : </p>
          <p className="legal--answer">yg.gicquel@gmail.com</p>

          <p className="legal--text legal--title">Numéro de téléphone : </p>
          <p className="legal--answer">06.45.77.15.83</p>
        </div>
        <div className="legal__hosting">
          <h3>Hébergement :</h3>

          <p className="legal--title">Nom de l'hébergeur : </p>
          <p className="legal--answer">GitHub Pages</p>

          <p className="legal--title">Adresse postalle : </p>
          <p className="legal--answer">88 Colin P. Kelly Jr. Street, United States</p>


          <p className="legal--title">Les contacter : </p>
          <p className="legal--answer"><a target="_blank" rel="noreferrer" href="https://docs.github.com/fr/support">https://docs.github.com/fr/support</a></p>


        </div>
      </div>
      <div className="legal__info">
        <h3>Politique de confidentialité</h3>
        <p>
          Le contenu de ce site, incluant textes, images et logos, est la
          propriété exclusive de Yann GICQUEL.
        </p>

        <h3>Politique de confidentialité</h3>
        <p>
          Les informations collectées via ce site ne sont utilisées que dans le
          cadre d’une prise de contact et ne sont pas transmises à des tiers.
        </p>
      </div>
    </div>
  );
}

export default Legal;
