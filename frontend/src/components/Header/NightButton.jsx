import React, { useState } from "react";
import "../../styles/main.scss";

const NightButton = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle('night-mode', !isNightMode);
  };

  return (
    <div className="night">
      <div
        className={`night__switch ${isNightMode ? 'night__switch--active' : ''}`}
        onClick={toggleNightMode}
      >
        <i className={`fa-solid fa-${isNightMode ? 'moon' : 'sun'}`}></i>
      </div>
    </div>
  );
};

export default NightButton;
