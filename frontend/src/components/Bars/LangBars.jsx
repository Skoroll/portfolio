import React from "react";
import flagFr from "../../assets/lang/france.png";
import flagEn from "../../assets/lang/united-kingdom.png";
import flagDe from"../../assets/lang/germany.png";

function LangBars() {
  return (
    <div className="bars-container">
    <h3>Langues parlées :</h3>
    <div className="lang__container">
    <div className="lang__detail">
      <p><img src={flagFr} alt="french flag" /> Français :</p>
      <div className="progress-bar">
        <div className="progress-fr"></div>
      </div>
    </div>
    <div className="lang__detail">
      <p><img src={flagEn} alt="english flag" /> Anglais :</p>
      <div className="progress-bar">
        <div className="progress-en"></div>
      </div>
    </div>
    <div className="lang__detail">
      <p><img src={flagDe} alt="german flag" /> Allemand :</p>
      <div className="progress-bar">
        <div className="progress-de"></div>
      </div>
    </div>
    </div>
  </div>
  );
}

export default LangBars;




