import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";
import { useEffect } from "react";

function NotFound() {
  
  // Scroll vers le haut lorsque le composant est monté
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="not-found">
        <p className="not-found--heading">404</p>
        <p className="not-found--heading">
            Page non trouvée
        </p>
        <p><i className="fa-regular fa-face-frown"></i></p>
        <Link to="/">Retour au site</Link>
    </div>

  );
}

export default NotFound;
