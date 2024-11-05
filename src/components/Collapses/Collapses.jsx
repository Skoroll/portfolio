import React, { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse__heading" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <i className={`fa-solid fa-arrow-down`}></i>
      </div>

      <div className="collapse__content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Collapse;
