import React from "react";
import "../../styles/main.scss";
import myCV from "../../assets/CV.webp";

function CvModal({ isOpen, handleClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <i className="fa-solid fa-x modal-close-icon" onClick={handleClose}></i>
        <img className="modal-img" src={myCV} alt="CV of GICQUEL Yann" />
      </div>
    </div>
  );
}

export default CvModal;
