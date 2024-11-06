import React from "react";

function AffinityBars() {
  return (
    <div className="bars-container">
    <h2>Mes affinités :</h2>
    <div className="code-affinity">
      <div className="code-affinity__column">
        <div className="affinity__item">
          <p className="affinity__title">
            <i className="fa-solid fa-brush"></i> Front-End
          </p>
          <div className="progress-bar">
          <p className="progress-label">100%</p>
            <div className="progress-front"></div>
          </div>
        </div>

        <div className="affinity__item">
          <p className="affinity__title">
            <i className="fa-solid fa-gear"></i>Back-End
          </p>
          <div className="progress-bar">
          <p className="progress-label">40%</p>
            <div className="progress-back"></div>{" "}
            {/* Classe spécifique pour HTML */}
          </div>
        </div>

        <div className="affinity__item">
          <p className="affinity__title">
            <i className="fa-solid fa-wrench"></i> Optimisation et accessibilité
          </p>
          <div className="progress-bar">
          <p className="progress-label">90%</p>
            <div className="progress-opti"></div>{" "}
            {/* Classe spécifique pour HTML */}
          </div>
        </div>

        <div className="affinity__item">
          <p className="affinity__title">
            <i className="fa-solid fa-paperclip"></i> Planification
          </p>
          <div className="progress-bar">
          <p className="progress-label">70%</p>
            <div className="progress-plan"></div>{" "}
            {/* Classe spécifique pour HTML */}
          </div>
        </div>
      </div>
      <div className="code-affinity__column">
        <div className="affinity__item">
          <p className="affinity__title">
            <i className="fa-brands fa-html5"></i> HTML
          </p>
          <div className="progress-bar">
          <p className="progress-label">100%</p>
            <div className="progress-html"></div>{" "}
            {/* Classe spécifique pour HTML */}
          </div>
        </div>

        <div className="affinity__item">
          <p className="affinity__title">
            <i className="fa-brands fa-css3-alt"></i> CSS
          </p>
          <div className="progress-bar">
          <p className="progress-label">100%</p>
            <div className="progress-css"></div>{" "}
            {/* Classe spécifique pour CSS */}
          </div>
        </div>

        <div className="affinity__item">
          <p className="affinity__title">
            <i className="fa-brands fa-js"></i> JavaScript
          </p>
          <div className="progress-bar">
          <p className="progress-label">90%</p>
            <div className="progress-js"></div>{" "}
            {/* Classe spécifique pour JavaScript */}
          </div>
        </div>

        <div className="affinity__item">
          <p className="affinity__title">
            <i className="fa-brands fa-react"></i> React
          </p>
          <div className="progress-bar">
          <p className="progress-label">100%</p>
            <div className="progress-react"></div>{" "}
            {/* Classe spécifique pour React */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AffinityBars;
