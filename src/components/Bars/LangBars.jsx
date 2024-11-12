import React from "react";
import flagFr from "../../assets/lang/france.png";
import flagEn from "../../assets/lang/united-kingdom.png";
import flagDe from "../../assets/lang/germany.png";

function LangBars() {
  return (
    <div className="bars-container">
      <h2>Langues parlées :</h2>
      <div className="lang__container">

        {/*Barre FR */}
        <div className="lang__detail">
          <p className="lang-__title"><img src={flagFr} alt="french flag" /> Français :</p>
          <div className="progress-bar">
            <p className="progress-label">Langue Maternelle</p>
            <div className="progress-fr"></div>
          </div>
        </div>

        {/*Barre EN */}
        <div className="lang__detail">
          <p className="lang-__title"><img src={flagEn} alt="english flag" /> Anglais :</p>
          <div className="progress-bar">
            <p className="progress-label">C1</p>
            <div className="progress-en"></div>
          </div>
        </div>

        {/*Barre DE */}
        <div className="lang__detail">
          <p className="lang-__title"><img src={flagDe} alt="german flag" /> Allemand :</p>
          <div className="progress-bar">
            <p className="progress-label">A2</p>
            <div className="progress-de"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LangBars;




