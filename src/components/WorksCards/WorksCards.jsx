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
  <h2 className="works__card--heading">{works.name}</h2>
  <div className="works__card--wrapper">
    <div className="works__card--cover">
      <img
        src={works.cover}
        alt={works.name}
        className="works__card--cover-image"
      />
    </div>
    <div className="works__card--content">
      <p className="works__card--why">{works.why}</p>
      <p className="works__card--short">{works.short}</p>
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
