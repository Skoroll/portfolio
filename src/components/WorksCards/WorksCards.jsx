import React from "react";
import { useNavigate } from "react-router-dom";
import "./WorksCards.scss";

function WorksCards({ works }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/works/${works.id}`);
  };

  return (
<div className="works__card" onClick={handleClick}>
  <div>
    {/* Nom du projet */}
    <h2 className="works__card--heading">{works.name}</h2>
    <div className="works__card--wrapper">
      {/* Image */}
      <div className="works__card--cover">
        <img
          src={works.cover}
          alt={works.name}
          className="works__card--cover-image"
        />
      </div>
    </div>
    {/* Infos du projet */}
    <div className="works__card--content">

      {/* Pourquoi ou lien */} 
      <div>
        <p className="works__card--subheading">Besoin :</p> 
        <p className="works__card--why">{works.why}</p>
      </div>
      {/* Description courte */}
      <div>
      <p className="works__card--subheading">Réponse :</p> 
        <p className="works__card--short">{works.short}</p>
      </div>

      {/* Tags du projet */}
      <div className="works__card--tools">
        {works.tools.split(', ').map((tool, index) => (
          <span key={index} className="tool">{tool}</span>
        ))} 
      </div>
    </div>
  </div>
</div>

  );
}

export default WorksCards;
