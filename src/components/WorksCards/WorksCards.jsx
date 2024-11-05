import React from "react";
import { useNavigate } from "react-router-dom";
import "./WorksCards.scss";

function WorksCards({ works }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/works/${works.id}`);
  };

  return (
    <li className="works__card" onClick={handleClick}>
      <p className="works__card--heading">{works.name}</p>
      <div
        className="works__card--cover"
        style={{
          backgroundImage: `url(${works.cover})`,
        }}
        aria-label={works.name}
      ></div>
      <div className="works__card--content">
        <ul>
          <li className="works__card--why">{works.why}</li>
          <li className="works__card--tools">
            {works.tools.split(', ').map((tool, index) => (
              <span key={index} className="tool">{tool}</span>
            ))}
          </li>
        </ul>
      </div>
    </li>
  );
}

export default WorksCards;
