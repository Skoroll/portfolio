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
          <p>
            <span className="legal--title">Nom de l'hébergeur : </span>
            <span className="legal--answer"></span>
          </p>
          <p>
            <span className="legal--title">Adresse postalle : </span>
            <span className="legal--answer"></span>
          </p>
          <p>
            <span className="legal--title">Adresse e-mail : </span>
            <span className="legal--answer"></span>
          </p>
          <p>
            <span className="legal--title">Numéro de téléphone : </span>
            <span className="legal--answer"></span>
          </p>
        </div>
      </div>
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
  );
}

export default Legal;
