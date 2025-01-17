import React from "react";
import { useNavigate } from "react-router-dom";
import "./WorksCards.scss";

function WorksCards({ works }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/works/${works.id}`);
  };

  return (
    <div
      className="works__card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Voir les détails de ${works.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <div>
        {/* Nom du projet */}
        <h2 className="works__card--heading">{works.name}</h2>
        <div className="works__card--wrapper">
          {/* Image de couverture */}
          <div className="works__card--cover">
            <img
              src={`${process.env.PUBLIC_URL}${works.cover}`}
              alt={`Couverture du projet ${works.name}`}
              className="works__card--cover-image"
            />
          </div>
        </div>
        {/* Contenu de la carte */}
        <div className="works__card--content">
          {/* Section "Pourquoi" */}
          <div>
            <p className="works__card--subheading">Besoin :</p>
            <p className="works__card--why">{works.why}</p>
          </div>
          {/* Réponse courte */}
          <div>
            <p className="works__card--subheading">Réponse :</p>
            <p className="works__card--short">{works.short}</p>
          </div>
          {/* Liste des outils */}
          <div className="works__card--tools">
            {works.tools.split(", ").map((tool, index) => (
              <span key={index} className="tool">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksCards;
