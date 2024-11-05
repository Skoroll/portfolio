import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import myWorks from "../../my-works/myWorks.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import "./WorksDetails.scss";

function WorkDetail() {
  const { id } = useParams();
  const work = myWorks.find((item) => item.id === parseInt(id));

  // Scroll vers le haut lorsque le composant est monté
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Vérifie si le projet existe
  if (!work) {
    return <p>Projet non trouvé</p>;
  }

  return (
    <div className="work-detail">
      <h2>{work.name}</h2>
      <div className="work-detail__container">
        <div className="work-detail__img-container">
          <Carrousel images={work.images} />
        </div>
        <div className="work-detail__text">
          <p><span className="work-detail__text--heading"> Pourquoi :</span> {work.why}</p>
          <p>{work.description}</p>
          <p className="works__card--tools">
          <span className="work-detail__text--heading"> Outils :</span>
            {work.tools.split(", ").map((tool, index) => (
              <span key={index} className="tool">
                {tool}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkDetail;
