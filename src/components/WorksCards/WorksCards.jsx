import React from "react";
import { useNavigate } from "react-router-dom";
import "./WorksCards.scss";

function WorksCards({ works }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/works/${works.id}`);
  };

  return (
    <ul className="works__card" onClick={handleClick}>
      <li className="works__card--heading">{works.name}</li>
      <div className="works__card--wrapper">
      <div
        className="works__card--cover"
        style={{
          backgroundImage: `url(${works.cover})`,
        }}
        aria-label={works.name}
      ></div>
      <div className="works__card--content">
       
          <li className="works__card--why">{works.why}</li>
          <li className="works__card--short">{works.short}</li>
          <li className="works__card--tools">
            {works.tools.split(', ').map((tool, index) => (
              <span key={index} className="tool">{tool}</span>
            ))} 
          </li>
     
      </div>
      </div>
    </ul>
  );
}

export default WorksCards;
