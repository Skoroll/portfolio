import React from "react";

function AffinityBars() {
  return (
    <div className="bars-container">
      <h2>Mes affinités :</h2>
      <div className="code-affinity">
        <div className="code-affinity__column">

          {/*Barre FrontEnd */}
          <div className="affinity__item">
            <p className="affinity__title">
              <i className="fa-solid fa-brush"></i> Front-End
            </p>
            <div className="progress-bar">
              <p className="progress-label">100%</p>
              <div className="progress-front"></div>
            </div>
          </div>

          {/*Barre BackEnd */}
          <div className="affinity__item">
            <p className="affinity__title">
              <i className="fa-solid fa-gear"></i>Back-End
            </p>
            <div className="progress-bar">
              <p className="progress-label">40%</p>
              <div className="progress-back"></div>{" "}
            </div>
          </div>

          {/*Barre Optimisation */}
          <div className="affinity__item">
            <p className="affinity__title">
              <i className="fa-solid fa-wrench"></i> Optimisation et accessibilité
            </p>
            <div className="progress-bar">
              <p className="progress-label">90%</p>
              <div className="progress-opti"></div>{" "}
            </div>
          </div>

          {/*Barre  Planification*/}
          <div className="affinity__item">
            <p className="affinity__title">
              <i className="fa-solid fa-paperclip"></i> Planification
            </p>
            <div className="progress-bar">
              <p className="progress-label">70%</p>
              <div className="progress-plan"></div>{" "}
            </div>
          </div>
          <div className="affinity__item">
            <p className="affinity__title">
              <i className="fa-brands fa-react"></i> SEO
            </p>
            <div className="progress-bar">
              <p className="progress-label">80%</p>
              <div className="progress-SEO"></div>{" "}
            </div>
          </div>
        </div>

        {/*Barre  HTML*/}
        <div className="code-affinity__column">
          <div className="affinity__item">
            <p className="affinity__title">
              <i className="fa-brands fa-html5"></i> HTML
            </p>
            <div className="progress-bar">
              <p className="progress-label">100%</p>
              <div className="progress-html"></div>{" "}
            </div>
          </div>

          {/*Barre CSS */}
          <div className="affinity__item">
            <p className="affinity__title">
              <i className="fa-brands fa-css3-alt"></i> CSS
            </p>
            <div className="progress-bar">
              <p className="progress-label">100%</p>
              <div className="progress-css"></div>{" "}
            </div>
          </div>

          {/*Barre JS */}
          <div className="affinity__item">
            <p className="affinity__title">
              <i className="fa-brands fa-js"></i> JavaScript
            </p>
            <div className="progress-bar">
              <p className="progress-label">90%</p>
              <div className="progress-js"></div>{" "}
            </div>
          </div>

          {/*Barre React */}
          <div className="affinity__item">
            <p className="affinity__title">
              <i className="fa-brands fa-react"></i> React
            </p>
            <div className="progress-bar">
              <p className="progress-label">100%</p>
              <div className="progress-react"></div>{" "}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AffinityBars;
