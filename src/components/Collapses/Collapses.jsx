import React, { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    /* Gère l'état ouvert/fermé du collapse, si ouvert, applique "open" à la classe */
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse__heading" onClick={toggleCollapse}>
        {/* Récupère le titre de CollapseData : */}
        <h3 className="collapse__title">{title}</h3>
        <i className={`fa-solid fa-arrow-down`}></i>
      </div>
      {/* Récupère le contenu et l'applique en HTML pour simplifier la mise en page : */}
      <div className="collapse__content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Collapse;
