import React, { useState } from "react";
import "../../styles/main.scss";
import myCV from "../../assets/CV_Y.GICQUEL.jpg";
import CvModal from "./CvModal"; // Assure-toi que le chemin soit correct

function CV() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="CV_div fade-in" id="cv">
      <h2>Mon CV</h2>
      <p className="section--heading">Mon CV est aussi consultable <a href="https://cvdesignr.com/p/64526b76bf6c0" target="_blank" rel="noreferrer">ici</a></p>
      <img className="CV_div__img" src={myCV} alt="CV of GICQUEL Yann" onClick={openModal} />
      
      <CvModal isOpen={isModalOpen} handleClose={closeModal} />
    </div>
  );
}

export default CV;
