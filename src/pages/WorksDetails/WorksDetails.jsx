import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import myWorks from "../../my-works/myWorks.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import NotFound from "../Work/NotFound";
import "./WorksDetails.scss";

function WorkDetail() {
  const { id } = useParams();
  const work = myWorks.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!work) {
    return <NotFound />;
  }

  return (
    <div className="work-detail">
      <h2>{work.name}</h2>
      <div className="work-detail__container">
        <div className="work-detail__img-container">
          <Carrousel images={work.images} />
        </div>
        <div className="work-detail__img-mobile">
          <img src={work.images[0]} alt={work.name} />
        </div>
        <div className="work-detail__text">
          <p>
            <span className="work-detail__text--heading">Pourquoi :</span>{" "}
            <span dangerouslySetInnerHTML={{ __html: work.why }} />
          </p>
          <div dangerouslySetInnerHTML={{ __html: work.description }} />
          <p className="works__card--tools">
            <span className="work-detail__text--heading">Outils :</span>
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
